const express = require("express");
const {
  getBudgets,
  getBudget,
  postBudget,
  deleteBudget,
  sendBudgetToEmail,
} = require("../controllers/BudgetController");
const router = express.Router();

router.get("/", getBudgets);

router.get("/:id", getBudget);

router.post("/", postBudget);

router.delete("/:id", deleteBudget);

router.post("/:id/sendBudgetToEmail", sendBudgetToEmail);

module.exports = router;
