const express = require('express');
const router = express.Router();
const productosAPIController = require('../../controllers/Api/productosAPI');

router.get('/', productosAPIController.list);
router.get('/:id', productosAPIController.show);

module.exports = router;