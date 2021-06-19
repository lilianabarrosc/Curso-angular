const express = require("express");

const {
    listarPorVideoJuego,
    guardar,
    borrar,
    update
} = require("../../controller/comentario_controller");

const router = express.Router();

router.get('/comentario/videoJuego/:videoJuegoId', listarPorVideoJuego);
router.post('/comentario', guardar);
router.delete('/comentario/:idComentario/usuario/:idUsuario', borrar);
router.put('/comentario/:idComentario/usuario/:idUsuario', update);


module.exports = router;