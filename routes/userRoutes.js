const express = require('express');

const router = express.Router();

const multer = require('multer');

const path = require('path');

const db = require('../database/models/');

const Usuario = db.Usuario;

const {
  check,
  validationResult,
  body
} = require('express-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null,'user' + Date.now() + path.extname(file.originalname)) 
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const extension = path.extname(file.originalname).toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        return res.status(400).send('Por favor sube una imagen en formato JPG, JPEG, PNG o GIF.');
      } 
    }
  })
  
  const uploadFile = multer({ storage })

const userController = require('../controllers/userController');

const userIsLogged = require('../middlewares/userIsLogged');
const userAdmin = require('../middlewares/userAdmin');
const menucheck = require('../middlewares/menucheck');

// 11 RUTAS

router.get('/', menucheck,userIsLogged, userController.list); // listado

router.get('/detail/:id', menucheck, userIsLogged, userController.detail); //detalle

router.get('/register', menucheck, userController.register); // Registro

router.get('/login', menucheck,userController.login); // Login

router.post('/logout', menucheck, userIsLogged, userController.logOut) // Accion Logout

router.get('/inscripcion', menucheck, userIsLogged, userController.inscripcion); // Inscripción

Usuario.findAll()
    .then((users) => {
router.post('/', uploadFile.single("image"),[
  
  check('name').isLength({
        min: 2
      }).withMessage('El campo nombre no puede estar vacío'),
  check('surname').isLength({min: 2   
      }).withMessage('El campo apellido no puede estar vacío'),
  check('email').isEmail().withMessage('Agregar un email válido'),

    
  check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres al menos una letra y un número'),

  body('email').custom(function (value) {
    let cont = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == value) {
            cont++;
        }
    }
    if (cont > 0) {
        return false;   
    } else {
        return true;    
    }
  }).withMessage('Usuario ya se encuentra registrado'),

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
}).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF')
], userController.registerProcess);//registerProcess
    })
.catch((errors) => {
  console.log(errors);
})  


router.post('/profile',[
  check('email').isEmail().withMessage('Email invalido'),
  check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
] ,userController.loginProcess); //loginProcess

router.get('/profile/:id', menucheck, userController.profile) //no se esta usando

router.get('/:id/edit', menucheck, userIsLogged, userAdmin, userController.editUsers); //editUsers (form)

router.put('/:id', uploadFile.single('image'), userController.editUser); //editUser

router.delete('/:id', userController.deleteUser); //deleteUser

router.get('/:id/delete', menucheck, userIsLogged, userAdmin, userController.deleteUsers); //deleteUsers (form)

module.exports= router;
