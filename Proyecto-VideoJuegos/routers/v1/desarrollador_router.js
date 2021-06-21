const express = require("express");
const { isAuth, isAdmin } = require('../../middleware/auth');

const {
    listar,
    getDesarrollador,
    guardar,
    borrar,
    update
} = require("../../controller/desarrollador_controller");

const router = express.Router();

router.all('/desarrollador/*', isAuth);

router.get('/desarrollador', listar);
router.get('/desarrollador/:id', isAdmin, getDesarrollador);
router.post('/desarrollador', isAuth, isAdmin, guardar);
router.delete('/desarrollador/:id', isAdmin, borrar);
router.put('/desarrollador/:id', isAdmin, update);

module.exports = router;