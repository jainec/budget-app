const express = require("express");
const {
  getBudgets,
  getBudget,
  postBudget,
  deleteBudget,
  sendBudgetToEmail,
} = require("../controllers/BudgetController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getBudgets);

router.get("/:id", auth, getBudget);

router.post("/", auth, postBudget);

router.delete("/:id", auth, deleteBudget);

router.post("/:id/sendBudgetToEmail", auth, sendBudgetToEmail);

module.exports = router;
