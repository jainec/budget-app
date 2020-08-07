const express = require("express");
const auth = require("../middlewares/auth");
const {
  login,
  me,
  logout,
  logoutAll,
  resetPassword,
} = require("../controllers/AuthController");
const router = express.Router();

router.post("/login", login);

router.get("/me", auth, me);

router.post("/logout", auth, logout);

router.post("/logoutAll", auth, logoutAll);

router.post("/resetPassword", resetPassword);

module.exports = router;

//refresh
