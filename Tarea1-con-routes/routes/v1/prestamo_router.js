const express = require('express');

const { listar,
    guardar,
    actualizar,
    eliminar} = require ('../controller/prestamos_controller');

//se define router
 const router = express.Router();

 router.get('/prestamo', listar);
 router.post('/prestamo', guardar);
 router.put('/prestamo/:id', actualizar);
 router.delete('/prestamo/:id', eliminar);

 module.exports = router;