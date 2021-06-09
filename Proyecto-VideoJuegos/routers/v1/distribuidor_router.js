const express = require("express");

const {
    listar,
    getDistribuidor,
    guardar,
    borrar,
    update
} = require("../../controller/distribuidor_controller");

const router = express.Router();

router.get('/distribuidor', listar); 
router.get('/distribuidor/:id', getDistribuidor);
router.post('/distribuidor', guardar);
router.delete('/distribuidor/:id', borrar);
router.put('/distribuidor/:id', update);
 
module.exports = router;