const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const { getCities } = require("../controllers/CityController");

router.get("/", auth, getCities);

module.exports = router;
