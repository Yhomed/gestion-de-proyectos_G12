const express = require('express');
const router = express.Router();
const usuariosAPIController = require('../../controllers/Api/UsuariosApi');

router.get('/', usuariosAPIController.list);
router.get('/:id', usuariosAPIController.show);

module.exports = router;