const express = require('express');

const router = express.Router();

const multer = require('multer');

const mainController = require('../controllers/mainController');
const userIsLogged = require('../middlewares/userIsLogged');
const menucheck = require('../middlewares/menucheck');

router.get('/', menucheck, mainController.index); // Home


module.exports= router;

