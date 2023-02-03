const express = require('express');

const router = express.Router();

const multer = require('multer');

const path = require('path');

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

router.post('/', uploadFile.single("image"), userController.registerProcess); //registerProcess

router.post('/profile', userController.loginProcess); //loginProcess

router.get('/profile/:id', userController.profile) //vista del perfil de usuario

router.get('/:id/edit', userController.editUsers); //editUsers (form)

router.put('/:id', uploadFile.single('image'), userController.editUser); //editUser

router.delete('/:id', userController.deleteUser); //deleteUser

router.get('/:id/delete', userController.deleteUsers); //deleteUsers (form)

module.exports= router;
