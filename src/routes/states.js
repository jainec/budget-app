const express = require("express");
const { getStates } = require("../controllers/StateController");
const router = express.Router();

router.get("/", getStates);

module.exports = router;
