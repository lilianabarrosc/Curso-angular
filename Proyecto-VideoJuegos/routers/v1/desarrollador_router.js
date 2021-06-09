const express = require("express");

const {
    listar,
    getDesarrollador,
    guardar,
    borrar,
    update
} = require("../../controller/desarrollador_controller");

const router = express.Router();

router.get('/desarrollador', listar); 
router.get('/desarrollador/:id', getDesarrollador);
router.post('/desarrollador', guardar);
router.delete('/desarrollador/:id', borrar);
router.put('/desarrollador/:id', update);
 
module.exports = router;