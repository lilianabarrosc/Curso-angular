const express = require("express");

const {
  listar,
  getGenero,
  guardar,
  borrar,
  update,
} = require("../../controller/genero_controller");

const router = express.Router();

router.get("/genero", listar);
router.get("/genero/:id", getGenero);
router.post("/genero", guardar);
router.delete("/genero/:id", borrar);
router.put("/genero/:id", update);

module.exports = router;
