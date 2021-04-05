const express = require('express');
const routerv1 = require('./routes/index');

const app = express();

routerv1(app);

app.listen(3002, () => {
    console.log("Servidor escuchando en puerto 3002");
});