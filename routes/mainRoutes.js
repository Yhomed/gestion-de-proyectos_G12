const express = require('express');

const router = express.Router();

const multer = require('multer');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);



router.get('/contacto', mainController.contacto);

router.get('/inscripcion', mainController.inscripcion);



router.get('/sobreMi', mainController.sobreMi);





module.exports= router;

