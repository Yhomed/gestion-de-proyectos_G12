const express = require('express');

const router = express.Router();

const multer = require('multer');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/productDetail', mainController.productDetail);

router.get('/contacto', mainController.contacto);

router.get('/inscripcion', mainController.inscripcion);

router.get('/productCar', mainController.productCar);

router.get('/curso0', mainController.curso0);

router.get('/curso1', mainController.curso1);

router.get('/curso2', mainController.curso2);

router.get('/curso3', mainController.curso3);

router.get('/curso4', mainController.curso4);

router.get('/sobreMi', mainController.sobreMi);

router.get('/createProducts', mainController.createProducts);

router.get('/editProducts', mainController.editProducts);


module.exports= router;

