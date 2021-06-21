const express = require("express");
const { isAuth, isAdmin } = require('../../middleware/auth');

const {
  listar,
  getUsuario,
  guardar,
  borrar,
  update,
} = require("../../controller/usuario_controller");

const router = express.Router();

router.all('/usuario/*', isAuth, isAdmin);

router.get("/usuario", isAuth, isAdmin, listar);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", isAuth, isAdmin, guardar);
router.delete("/usuario/:id", borrar);
router.put("/usuario/:id", update);

module.exports = router;
