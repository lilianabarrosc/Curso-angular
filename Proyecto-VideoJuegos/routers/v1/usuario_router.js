const express = require("express");

const {
  listar,
  getUsuario,
  guardar,
  borrar,
  update,
} = require("../../controller/usuario_controller");

const router = express.Router();

router.get("/usuario", listar);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", guardar);
router.delete("/usuario/:id", borrar);
router.put("/usuario/:id", update);

module.exports = router;
