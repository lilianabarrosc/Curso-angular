const express = require('express');

const app = express();

//se monta las rutas definidas en el index de la carpeta rutas
app.use( require('./rutas') );

app.listen(3001, () => {
    console.log("Servidor escuchando en puerto 3001");
});