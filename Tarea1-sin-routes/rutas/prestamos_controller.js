const express = require('express');
const app = express();

const Prestamos = [
    { idLibro: 123,
      idUsuario: 123,
      fechaPrestamo: '12/04/2021',
      fechaDevolucion:'30/04/2021'
    }
]

//===============
// Listar prestamos
//===============
app.get('/prestamo', (req, res) => {
    res.json({
        data: Prestamos
    });
});

//===============
// Guardar prestamo
//===============
app.post('/prestamo', (req, res) => {
    res.json({
        messaje: "guardado"
    });
});

//===============
// Actualizar prestamo
//===============
app.post('/prestamo/:id', (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
});


//===============
// Borrar prestamo
//===============
app.delete('/prestamo/:id', (req, res) => {
    res.json({
        messaje: "Eliminado"
    });
});

module.exports = app;