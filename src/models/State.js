const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
    },
  },
  { timestamps: true }
);

stateSchema.methods.toJSON = function () {
  const state = this.toObject();
  delete state.__v;
  return state;
};

const State = mongoose.model("State", stateSchema);

module.exports = State;
