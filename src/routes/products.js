const express = require('express');

const path = require('path');

const router = express.Router();

const multer = require('multer');

const productosController = require('../controllers/productosController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/courses')
    },
    filename: function (req, file, cb) {
      cb(null,'curso' + Date.now() + path.extname(file.originalname))  
    }
  })
  
  const uploadFile = multer({ storage })

/* 8 RUTAS */

//ruta 1 para el listado de productos 
router.get('/', productosController.productList); //listo

//ruta 2 para el formulario del create
router.get('/create', productosController.createProducts);//listo

//ruta 3 para el detalle de un producto particular
router.get('/:id',productosController.productDetail); //listo

//ruta 4 para la acción de creación (POST) --> alta
router.post('/', uploadFile.single('image'), productosController.createNewProduct); //listo

//ruta 5 para el formulario del edit
router.get('/:id/edit', productosController.editProducts); //listo

//ruta 6 para la acción de edición (PUT) --> modificación
router.put('/:id', uploadFile.single('image'), productosController.editProduct); //listo

//ruta 7 para la acción de borrado (DELETE) --> baja
router.delete('/:id', productosController.deleteProduct); //listo

//ruta 8 para el formulario del delete
router.get('/:id/delete', productosController.deleteProducts); //listo

module.exports = router;