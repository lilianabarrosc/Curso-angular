const express = require('express');
const app = express();

const Autores = [
    { idAutor: 123,
      nombre: 'J. Verne',
      nacionalidad: 'Frances'
    },
    { idAutor: 124,
      nombre: 'Elli H. Radinger',
      nacionalidad: 'Alemana'
    }
]

//===============
// Listar autores
//===============
app.get('/autor', (req, res) => {
    res.json({
        data: Autores
    });
});

//===============
// Guardar autor
//===============
app.post('/autor', (req, res) => {
    res.json({
        messaje: "guardado"
    });
});

//===============
// Actualizar autor
//===============
app.post('/autor/:id', (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
});


//===============
// Borrar autor
//===============
app.delete('/autor/:id', (req, res) => {
    res.json({
        messaje: "Eliminado"
    });
});

module.exports = app;