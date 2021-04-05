
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
const listar = (req, res) => {
    res.json({
        data: Autores
    });
};

//===============
// Guardar autor
//===============
const guardar = (req, res) => {
    res.json({
        messaje: "guardado"
    });
}

//===============
// Actualizar autor
//===============
const actualizar = (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
};


//===============
// Borrar autor
//===============
const eliminar = (req, res) => {
    res.json({
        messaje: "Eliminado"
    });
};

module.exports = {
    listar,
    guardar,
    actualizar,
    eliminar
};