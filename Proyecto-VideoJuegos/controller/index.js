const express = require('express');

const app = express();

app.use( require('./clasificacion_controller') );
app.use( require('./comentario_controller') );
app.use( require('./desarrollador_controller') );
app.use( require('./distribuidor_controller') );
app.use( require('./genero_controller') );
app.use( require('./usuario_controller') );
app.use( require('./videoJuego_controller') );
app.use( require('./login_controller') );

module.exports = app;
