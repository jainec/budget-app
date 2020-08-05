const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "State",
    },
  },
  { timestamps: true }
);

const City = mongoose.model("City", citySchema);

module.exports = City;
