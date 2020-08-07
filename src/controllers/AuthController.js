const User = require("../models/User");
const transporter = require("../email");

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateJwtToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const me = async (req, res) => {
  res.send(req.user);
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
};

const resetPassword = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(422).json({ error: "O campo e-mail é obrigatório!" });
    }

    const email = {
      from: "jaine.ccs@gmail.com",
      to: req.body.email,
      subject: "Orçamento - Budget App",
      text: "Alteração de senha",
    };

    transporter.sendMail(email, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
      }
    });

    res.json({ sucess: "E-mail enviado com sucesso!" });
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  login,
  me,
  logout,
  logoutAll,
  resetPassword,
};
