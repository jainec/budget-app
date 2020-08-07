const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const { getUnityTypes } = require("../controllers/UnityTypeController");

router.get("/", auth, getUnityTypes);

module.exports = router;
