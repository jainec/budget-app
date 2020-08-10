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

citySchema.methods.toJSON = function () {
  const city = this.toObject();
  delete city.__v;
  return city;
};

const City = mongoose.model("City", citySchema);

module.exports = City;
