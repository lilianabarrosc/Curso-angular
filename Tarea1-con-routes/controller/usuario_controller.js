
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
const listar = (req, res) => {
    res.json({
        data: Usuarios
    });
}

//===============
// Guardar usuario
//===============
const guardar = (req, res) => {
    res.json({
        messaje: "guardado"
    });
}

//===============
// Actualizar usuario
//===============
const actualizar = (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
}


//===============
// Borrar usuario
//===============
const eliminar = (req, res) => {
    res.json({
        messaje: "Eliminado"
    });
}

module.exports = {
    listar,
    guardar,
    actualizar,
    eliminar
};