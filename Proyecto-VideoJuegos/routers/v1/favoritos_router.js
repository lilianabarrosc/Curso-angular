const express = require("express");

const {
    agregarFavorito,
    eliminarFavorito,
    listarPorUsuario
} = require("../../controller/favoritos_controller");

const router = express.Router();

router.get('/favoritos/:idUsuario', listarPorUsuario); 
router.delete('/favoritos/videoJuego/:idVideoJuego/usuario/:idUsuario', eliminarFavorito);
router.post('/favoritos', agregarFavorito);
 
module.exports = router;