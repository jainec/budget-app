const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    unityTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UnityType",
      //required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    totalStock: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    observations: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
