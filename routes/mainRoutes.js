const express = require('express');

const router = express.Router();

const multer = require('multer');

const mainController = require('../controllers/mainController');


router.get('/', mainController.index); // Home


module.exports= router;

