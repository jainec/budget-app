const User = require("../models/User");
const Address = require("../models/Address");
const bcrypt = require("bcryptjs/dist/bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .sort({ name: 1 })
      .populate({ path: "addressId", select: "-__v" })
      .limit(parseInt(req.query.limit))
      .skip(parseInt(req.query.skip));
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).populate({
      path: "addressId",
      select: "-__v",
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postUser = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    //req.body.profileId = 2;
    req.body.addressId = address._id;

    if (req.body.type == "PF" && !req.body.cpf) {
      return res
        .status(422)
        .send({ error: "O cpf é obrigatório para usuários do tipo PF." });
    }

    if (req.body.type == "PF" && !req.body.rg) {
      return res
        .status(422)
        .send({ error: "O RG é obrigatório para usuários do tipo PF." });
    }

    if (req.body.type == "PJ" && !req.body.cnpj) {
      return res
        .status(422)
        .send({ error: "O CNPJ é obrigatório para usuários do tipo PF." });
    }

    const user = new User(req.body);
    await user.save();
    const token = await user.generateJwtToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchUser = async (req, res) => {
  try {
    if (req.body.type == "PF" && !req.body.cpf) {
      return res
        .status(422)
        .send({ error: "O cpf é obrigatório para usuários do tipo PF." });
    }

    if (req.body.type == "PF" && !req.body.rg) {
      return res
        .status(422)
        .send({ error: "O RG é obrigatório para usuários do tipo PF." });
    }

    if (req.body.type == "PJ" && !req.body.cnpj) {
      return res
        .status(422)
        .send({ error: "O CNPJ é obrigatório para usuários do tipo PF." });
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 8);
    }
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body);

    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,
};
