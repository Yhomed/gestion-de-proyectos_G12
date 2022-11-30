const express = require('express');

const router = express.Router();

const multer = require('multer');

const productosController = require('../controllers/productosController');

//ruta 1
router.get('/', productosController.productList);

//ruta 3
router.get('/:id',productosController.productDetail);

//ruta 5
router.get(':id/edit', productosController.productDetail);

// editProductos

// createProducts

// productCar

module.exports= router;