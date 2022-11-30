const express = require('express');

const router = express.Router();

// const multer = require('multer');

const userController = require('../controllers/userController');

// RUTAS

router.get('/register', userController.register); // Registro

router.get('/login', userController.login); // Login

router.get('/inscripcion', userController.inscripcion); // Inscripción

router.get('/sobreMi', mainController.sobreMi); // Sobre Mí (Descripción GCM)

router.get('/contacto', mainController.contacto); // FOrmulario de contacto Usuarios - Empresa

    // editUsuarios

    // createUsuarios


module.exports= router;