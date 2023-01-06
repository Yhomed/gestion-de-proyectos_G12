const express = require('express');

const router = express.Router();

const multer = require('multer');

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

// RUTAS

router.get('/', userController.list); // listado

router.get('/register', userController.register); // Registro

router.get('/login', userController.login); // Login

router.get('/inscripcion', userController.inscripcion); // Inscripción

router.get('/create',uploadFile.single("image"), userController.createUsuario);    // createUsuarios


module.exports= router;