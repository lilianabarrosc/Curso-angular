const express = require("express");
const { isAuth } = require('../../middleware/auth');

const {
    agregarFavorito,
    eliminarFavorito,
    listarPorUsuario
} = require("../../controller/favoritos_controller");

const router = express.Router();

router.all('/favoritos/*', isAuth);

router.get('/favoritos/:idUsuario', listarPorUsuario);
router.delete('/favoritos/videoJuego/:idVideoJuego/usuario/:idUsuario', eliminarFavorito);
router.post('/favoritos', isAuth, agregarFavorito);

module.exports = router;