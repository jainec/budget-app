const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/User");

const userId = new mongoose.Types.ObjectId();

const user = new User({
  _id: userId,
  name: "Jaine",
  email: "jaine@teste.com",
  password: "password",
  companyName: "decea",
  type: "PJ",
  cnpj: "1212211212",
  tokens: [
    {
      token: jwt.sign({ _id: userId }, "secret"),
    },
  ],
});

const setupDatabase = async () => {
  await User.deleteMany();
  await user.save();
};

module.exports = {
  userId,
  user,
  setupDatabase,
};
