const express = require("express");
const {
  getBudgets,
  getBudget,
  postBudget,
  deleteBudget,
} = require("../controllers/BudgetController");
const router = express.Router();

router.get("/", getBudgets);

router.get("/:id", getBudget);

router.post("/", postBudget);

router.delete("/:id", deleteBudget);

module.exports = router;
