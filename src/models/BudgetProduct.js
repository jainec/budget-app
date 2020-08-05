const mongoose = require("mongoose");

const budgetProductSchema = new mongoose.Schema(
  {
    budgetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Budget",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    meters: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const BudgetProduct = mongoose.model("BudgetProduct", budgetProductSchema);

module.exports = BudgetProduct;
