const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/User");
const Category = require("../../src/models/Category");
const State = require("../../src/models/State");
const UnityType = require("../../src/models/UnityType");
const City = require("../../src/models/City");

const userId = new mongoose.Types.ObjectId();

const user = {
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
};

const category1 = {
  _id: new mongoose.Types.ObjectId(),
  name: "Tecnologia",
};

const category2 = {
  _id: new mongoose.Types.ObjectId(),
  name: "Casa",
};

const state = {
  _id: new mongoose.Types.ObjectId(),
  name: "Santa Catarina",
  abbr: "SC",
};

const unityType1 = {
  _id: new mongoose.Types.ObjectId(),
  name: "Conjunto",
  abbr: "CONJ",
};

const unityType2 = {
  _id: new mongoose.Types.ObjectId(),
  name: "Metro",
  abbr: "M",
};

const city1 = {
  name: "Aracaju",
  stateId: state._id,
};

const city2 = {
  name: "Estância",
  stateId: state._id,
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Category.deleteMany();
  await State.deleteMany();
  await UnityType.deleteMany();
  await City.deleteMany();
  await new User(user).save();
  await new Category(category1).save();
  await new Category(category2).save();
  await new State(state).save();
  await new UnityType(unityType1).save();
  await new UnityType(unityType2).save();
  await new City(city1).save();
  await new City(city2).save();
};

module.exports = {
  userId,
  user,
  category1,
  category2,
  state,
  unityType1,
  unityType2,
  city1,
  city2,
  setupDatabase,
};
