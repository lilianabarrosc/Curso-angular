const express = require("express");
const { isAuth, isAdmin } = require('../../middleware/auth');

const {
    listar,
    getDistribuidor,
    guardar,
    borrar,
    update
} = require("../../controller/distribuidor_controller");

const router = express.Router();

router.all('/distribuidor/*', isAuth);

router.get('/distribuidor', listar); 
router.get('/distribuidor/:id', isAdmin, getDistribuidor);
router.post('/distribuidor', isAuth, isAdmin, guardar);
router.delete('/distribuidor/:id', isAdmin, borrar);
router.put('/distribuidor/:id', isAdmin, update);
 
module.exports = router;