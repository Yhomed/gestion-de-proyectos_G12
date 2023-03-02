const express = require('express');
const router = express.Router();
const usuariosAPIController = require('../../controllers/Api/UsuariosApi');

router.get('/', usuariosAPIController.list);

module.exports = router;