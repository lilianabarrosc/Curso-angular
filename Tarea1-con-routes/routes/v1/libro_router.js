const express = require('express');

const { listar,
    guardar,
    actualizar,
    eliminar} = require ('../controller/libro_controller');

//se define router
 const router = express.Router();

 router.get('/libro', listar);
 router.post('/libro', guardar);
 router.put('/libro/:id', actualizar);
 router.delete('/libro/:id', eliminar);

 module.exports = router;