const express = require('express');

const { listar,
    guardar,
    actualizar,
    eliminar} = require ('../controller/usuario_controller');

//se define router
 const router = express.Router();

 router.get('/usuario', listar);
 router.post('/usuario', guardar);
 router.put('/usuario/:id', actualizar);
 router.delete('/usuario/:id', eliminar);

 module.exports = router;