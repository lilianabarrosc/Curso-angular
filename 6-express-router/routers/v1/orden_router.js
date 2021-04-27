const express = require('express');
const { isAuth } = require('../../middleware/auth');
const { 
  generarOrden,

} = require('../../controller/orden_controller');


const router = express.Router();



//Rutas
router.get('/orden/generar/:idUsuario',isAuth, generarOrden);



module.exports = router;