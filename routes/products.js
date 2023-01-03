const express = require('express');

const router = express.Router();

//const multer = require('multer');

const productosController = require('../controllers/productosController');

/* 7 RUTAS */

//ruta 1 para el listado de productos 
router.get('/', productosController.productList); //listo

//ruta 2 para el formulario de creación
router.get('/create', productosController.createProducts); 

//ruta 3 para el detalle de un producto particular
router.get('/:id',productosController.productDetail); //listo

//ruta 4 para la acción de creación (POST) --> alta
router.post('/', productosController.createNewProduct);

//ruta 5 para el formulario de edición
router.get('/:id/edit', productosController.editProducts);

//ruta 6 para la acción de edición (PUT) --> modificación
router.put('/:id', productosController.editProduct);

//ruta 7 para la acción de borrado (DELETE) --> baja
router.delete('/:id', productosController.deleteProduct);

//ruta 8 para el formulario de delete
router.get('/:id/delete', productosController.deleteProducts);

// productCar

module.exports = router;