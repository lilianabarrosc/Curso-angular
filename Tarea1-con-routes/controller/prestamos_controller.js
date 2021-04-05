
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
const listar = (req, res) => {
    res.json({
        data: Prestamos
    });
}

//===============
// Guardar prestamo
//===============
const guardar = (req, res) => {
    res.json({
        messaje: "guardado"
    });
}

//===============
// Actualizar prestamo
//===============
const actualizar = (req, res) => {
    res.json({
        messaje: "Actualizado"
    });
}


//===============
// Borrar prestamo
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