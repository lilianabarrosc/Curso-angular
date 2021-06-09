const express = require("express");

const {
  listar,
  getClasificacion,
  guardar,
  borrar,
  update,
} = require("../../controller/clasificacion_controller");

const router = express.Router();

router.get('/clasificacion', listar); 
router.get('/clasificacion/:id', getClasificacion);
router.post('/clasificacion', guardar);
router.delete('/clasificacion/:id', borrar);
router.put('/clasificacion/:id', update);
 
module.exports = router;
