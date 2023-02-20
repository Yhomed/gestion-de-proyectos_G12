const express = require('express');

const router = express.Router();

const multer = require('multer');

const path = require('path');

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
    }
  })
  
  const uploadFile = multer({ storage })

const userController = require('../controllers/userController');

// 11 RUTAS

router.get('/', userController.list); // listado

router.get('/detail/:id', userController.detail); //detalle

router.get('/register', userController.register); // Registro

router.get('/login', userController.login); // Login

router.get('/inscripcion', userController.inscripcion); // Inscripción

User.findAll()
    .then((users) => {
router.post('/', uploadFile.single("image"),[
  //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
  check('name').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
  check('surname').isLength({min: 1   
      }).withMessage('El campo apellido no puede estar vacío'),
  check('email').isEmail().withMessage('Agregar un email válido'),

  //Aquí valido el Password   
  check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres al menos una letra y un número'),
  //Aquí valido si usuario existe o no en la tabla de usuarios Por el campo email)
  body('email').custom(function (value) {
    let contador = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == value) {
            contador++;
        }
    }
    if (contador > 0) {
        return false;   
    } else {
        return true;    
    }
  }).withMessage('Usuario ya se encuentra registrado'),

body('image').custom(function (value, { req }) {
  let ext
  if(req.file != undefined ){
      return true
  }else{
      ext = ""+path.extname(req.files[0].filename).toLowerCase();
  }
  if (
      ext == ".jpg" ||
      ext == ".jpeg" ||
      ext == ".png" ||
      ext == ".gif"){
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

router.get('/profile/:id', userController.profile) //vista del perfil de usuario

router.get('/:id/edit', userController.editUsers); //editUsers (form)

router.put('/:id', uploadFile.single('image'), userController.editUser); //editUser

router.delete('/:id', userController.deleteUser); //deleteUser

router.get('/:id/delete', userController.deleteUsers); //deleteUsers (form)

module.exports= router;
