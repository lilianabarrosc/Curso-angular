const express = require("express");

const {
  getxGenero,
  getxClasificacion,
  getxDistribuidor,
  getxDesarrollador,
  getVideoJuego,
  listar,
  guardar,
  borrar,
  update,
} = require("../../controller/videoJuego_controller");

const router = express.Router();

router.get("/videoJuego/:genero", getxGenero);
router.get("/videoJuego/:clasificacion", getxClasificacion);
router.get("/videoJuego/:distribuidor", getxDistribuidor);
router.get("/videoJuego/:desarrollador", getxDesarrollador);
router.get("/videoJuego/:id", getVideoJuego);
router.get("/videoJuego", listar);
router.post("/videoJuego", guardar);
router.delete("/videoJuego/:id", borrar);
router.put("/videoJuego/:id", update);

module.exports = router;
