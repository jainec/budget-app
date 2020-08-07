const User = require("../models/User");
const Address = require("../models/Address");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

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
    const user = await User.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
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
