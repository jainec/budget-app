const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
        meters: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

budgetSchema.methods.toJSON = function () {
  const budget = this.toObject();
  delete budget.__v;
  return budget;
};

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
