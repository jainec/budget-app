const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
  },
  street: {
    type: String,
  },
  number: {
    type: Number,
  },
  complement: {
    type: String,
  },
  neighborhood: {
    type: String,
  },
  zipcode: {
    type: String,
  },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
