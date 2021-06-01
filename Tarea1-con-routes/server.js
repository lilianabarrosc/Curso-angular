//modulos externos
const express = require('express');

//modulos internos
const routerv1 = require('./routes/v1/index');
//cont routerv2 = require('./routes/v2/lddjd');

//express
const app = express();

//routes
routerv1(app);
//routerv2(app);

app.listen(3002, () => {
    console.log("Servidor escuchando en puerto 3002");
});