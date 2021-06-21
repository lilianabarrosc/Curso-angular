const express = require("express");
const { isAuth, isAdmin } = require('../../middleware/auth');

const {
  listar,
  getClasificacion,
  guardar,
  borrar,
  update,
} = require("../../controller/clasificacion_controller");

const router = express.Router();

router.all('/clasificacion/*',isAuth);

router.get('/clasificacion', listar); 
router.get('/clasificacion/:id', getClasificacion);
router.post('/clasificacion', isAuth, isAdmin, guardar);
router.delete('/clasificacion/:id', isAdmin, borrar);
router.put('/clasificacion/:id', isAdmin, update);
 
module.exports = router;
