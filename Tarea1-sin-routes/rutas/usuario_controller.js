const express = require('express');
const app = express();

const Usuarios = [
    { idUsuario: 123,
      numUsuario: 123,
      nombre: 'Felipe Perez',
      direccion: 'Santiago',
      telefono:'+569374643'
    },
    { idUsuario: 124,
      numUsuario: 124,
      nombre: 'Maria Vazquez',
      direccion: 'Santiago',
      telefono:'+5698472647'
    }
]

//===============
// Listar usuarios
//===============
app.get('/usuario', (req, res) => {
    res.json({
        data: Usuarios
    });
});

//===============
// Guardar usuario
//===============
app.post('/usuario', (req, res) => {
    res.json({
        messaje: "guardado"
    });
});

//===============
// Actualizar usuario
//===============
app.post('/usuario/:id', (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
});


//===============
// Borrar usuario
//===============
app.delete('/usuario/:id', (req, res) => {
    res.json({
        messaje: "Eliminado"
    });
});

module.exports = app;