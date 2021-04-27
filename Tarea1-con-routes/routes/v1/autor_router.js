const express = require('express');

const { listar,
    guardar,
    actualizar,
    eliminar} = require ('../../controller/autor_controller');

//se define router
 const router = express.Router();

 router.get('/autor', listar);
 router.post('/autor', guardar);
 router.put('/autor/:id', actualizar);
 router.delete('/autor/:id', eliminar);

 module.exports = router;

