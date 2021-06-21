const express = require("express");
const { isAuth, isAdmin } = require('../../middleware/auth');

const {
  listar,
  getGenero,
  guardar,
  borrar,
  update,
} = require("../../controller/genero_controller");

const router = express.Router();

router.all('/genero/*', isAuth);

router.get("/genero", listar);
router.get("/genero/:id", isAdmin, getGenero);
router.post("/genero", isAuth, isAdmin, guardar);
router.delete("/genero/:id", isAdmin, borrar);
router.put("/genero/:id", isAdmin, update);

module.exports = router;
