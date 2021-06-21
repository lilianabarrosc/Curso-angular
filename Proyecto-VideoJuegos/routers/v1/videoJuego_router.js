const express = require("express");
const { isAuth, isAdmin } = require('../../middleware/auth');

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

router.get("/videoJuego/genero/:genero", getxGenero);
router.get("/videoJuego/clasificacion/:clasificacion", getxClasificacion);
router.get("/videoJuego/distribuidor/:distribuidor", getxDistribuidor);
router.get("/videoJuego/desarrollador/:desarrollador", getxDesarrollador);
router.get("/videoJuego/:id", getVideoJuego);
router.get("/videoJuego", listar);
router.post("/videoJuego", isAuth, isAdmin, guardar);
router.delete("/videoJuego/:idVideoJuego", isAuth, isAdmin, borrar);
router.put("/videoJuego/:idVideoJuego", isAuth, isAdmin, update);

module.exports = router;
