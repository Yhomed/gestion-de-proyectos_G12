const express = require('express');

const router = express.Router();

const multer = require('multer');

const productosController = require('../controllers/productosController');

router.get('/:id',productosController.productDetail)

// editProductos

// createProducts

// productCar

module.exports= router;