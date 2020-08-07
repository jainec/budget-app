const mongoose = require("mongoose");

const unityTypeSchema = new mongoose.Schema(
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

unityTypeSchema.methods.toJSON = function () {
  const unityType = this.toObject();
  delete unityType.__v;

  return unityType;
};

const UnityType = mongoose.model("UnityType", unityTypeSchema);

module.exports = UnityType;
