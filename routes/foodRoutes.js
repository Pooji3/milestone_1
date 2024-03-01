const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');

router.get('/', foodController.getAllFood);

module.exports = router;