const express = require("express");
const auth = require("../middlewares/auth");
const { getStates } = require("../controllers/StateController");
const router = express.Router();

router.get("/", auth, getStates);

module.exports = router;
