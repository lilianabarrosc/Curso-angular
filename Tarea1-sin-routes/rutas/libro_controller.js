const express = require('express');
const app = express();

const libros = [
    { idLibro: 123,
      codigo: 123,
      titulo: 'La Sabiduría de los Lobos',
      ISBN: '9788416720262',
      editorial: 'Urano',
      numPage: 312,
      anio: 2018,
      numEdicion: 1,
      idAutor:124
    },
    { idLibro: 124,
      codigo: 124,
      titulo: 'Viaje al Centro de la Tierra',
      ISBN: '9788417563325',
      editorial: 'Almadraba',
      numPage: 165,
      anio: 2020,
      numEdicion: 1,
      idAutor:123
    }
]

//===============
// Listar libros
//===============
app.get('/libro', (req, res) => {
    res.json({
        data: libros
    });
});

//===============
// Guardar libro
//===============
app.post('/libro', (req, res) => {
    res.json({
        messaje: "guardado"
    });
});

//===============
// Actualizar libro
//===============
app.post('/libro/:id', (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
});


//===============
// Borrar libro
//===============
app.delete('/libro/:id', (req, res) => {
    res.json({
        messaje: "Eliminado"
    });
});

module.exports = app;