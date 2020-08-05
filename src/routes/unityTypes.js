const express = require('express');
const router = express.Router();
const { getUnityTypes } = require('../controllers/UnityTypeController');

router.get('/', getUnityTypes);

module.exports = router;