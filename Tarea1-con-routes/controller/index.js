const express = require('express');

const app = express();

app.use( require('./autor_controller') );
app.use( require('./libro_controller') );
app.use( require('./prestamos_controller') );
app.use( require('./usuario_controller') );

module.exports = app;