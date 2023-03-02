const express = require('express');
const router = express.Router();
const productosAPIController = require('../../controllers/Api/productosAPI');

router.get('/', productosAPIController.list);

module.exports = router;