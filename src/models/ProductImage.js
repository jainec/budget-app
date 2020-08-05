const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    path: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductImage = mongoose.model("ProductImage", productImageSchema);

module.exports = ProductImage;
