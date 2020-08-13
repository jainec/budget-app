const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    unityTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UnityType",
      required: true,
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
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    images: [
      {
        type: Buffer,
      },
    ],
  },
  { timestamps: true }
);

productSchema.methods.toJSON = function () {
  const product = this.toObject();
  delete product.__v;
  delete product.images;
  return product;
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
