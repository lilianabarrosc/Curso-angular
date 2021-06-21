const express = require("express");
const { isAuth } = require('../../middleware/auth');

const {
    listarPorVideoJuego,
    guardar,
    borrar,
    update
} = require("../../controller/comentario_controller");

const router = express.Router();

router.all('/comentario/*',isAuth);

router.get('/comentario/videoJuego/:videoJuegoId', listarPorVideoJuego);
router.post('/comentario', isAuth, guardar);
router.delete('/comentario/:idComentario/usuario/:idUsuario', borrar);
router.put('/comentario/:idComentario/usuario/:idUsuario', update);


module.exports = router;