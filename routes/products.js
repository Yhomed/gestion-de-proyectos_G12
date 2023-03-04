const express = require('express');

const path = require('path');

const router = express.Router();

const multer = require('multer');

const productosController = require('../controllers/productosController');

const {
  check,
  validationResult,
  body
} = require('express-validator');

const userAdmin = require('../middlewares/userAdmin');
const userIsLogged = require('../middlewares/userIsLogged');
const menucheck = require('../middlewares/menucheck');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/courses')
    },
    filename: function (req, file, cb) {
      cb(null,'curso' + Date.now() + path.extname(file.originalname))
      /*const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const extension = path.extname(file.originalname).toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        return res.status(400).send('Por favor sube una imagen en formato JPG, JPEG, PNG o GIF.');
      }*/
    }
  })
  
  const uploadFile = multer({ storage })

/* 8 RUTAS */

//ruta 1 para el listado de productos 
router.get('/', menucheck, productosController.productList);

//ruta 2 para el formulario del create
router.get('/create', menucheck, userIsLogged, userAdmin, productosController.createProducts);

//ruta 3 para el detalle de un producto particular
router.get('/:id', menucheck, productosController.productDetail);

//ruta 4 para la acción de creación (POST) --> alta  
router.post('/', uploadFile.single("image"),[

  //check('title').not().isEmpty().withMessage('El campo titulo debe ser obligatorio'),
  
  check('title').isLength({
        min: 5
      }).withMessage('El campo titulo debe de ser minimo 5 caracteres'),

  check('parrafo').isLength({
        min: 20
      }).withMessage('El campo descripcion debe de ser minimo 20 caracteres'),


  body('image').custom(function (value, { req }) {
        let extension
        if(req.file != undefined ){
            return true
        }else{
            extension = ""+path.extname(req.files[0].filename).toLowerCase();
        }
        if (
            extension == ".jpg" ||
            extension == ".jpeg" ||
            extension == ".png" ||
            extension == ".gif"){
                return true;
            }
            return false;
      }).withMessage('Solo debe seleccionar archivos con extensión JPG, JPEG, PNG o GIF')
    ], productosController.createNewProduct);

//ruta 5 para el formulario del edit
router.get('/:id/edit', menucheck, userIsLogged, userAdmin, productosController.editProducts);

//ruta 6 para la acción de edición (PUT) --> modificación
router.put('/:id', uploadFile.single('image'), [

  //check('title').not().isEmpty().withMessage('El campo titulo debe ser obligatorio'),
  
  check('title').isLength({
        min: 5
      }).withMessage('El campo titulo debe de ser minimo 5 caracteres'),

  check('parrafo').isLength({
        min: 20
      }).withMessage('El campo descripcion debe de ser minimo 20 caracteres'),

  body('image').custom(function (value, { req }) {
        let extension
        if(req.file != undefined ){
            return true
        }else{
            extension = ""+path.extname(req.files[0].filename).toLowerCase();
        }
        if (
            extension == ".jpg" ||
            extension == ".jpeg" ||
            extension == ".png" ||
            extension == ".gif"){
                return true;
            }
            return false;
      }).withMessage('Solo debe seleccionar archivos con extensión JPG, JPEG, PNG o GIF')
    ],productosController.editProduct); //listo

//ruta 7 para la acción de borrado (DELETE) --> baja
router.delete('/:id', productosController.deleteProduct);

//ruta 8 para el formulario del delete
router.get('/:id/delete', menucheck, userIsLogged, userAdmin, productosController.deleteProducts); //listo


module.exports = router;