const ModelUsuario = require("../models/usuario_model");

/**	agregar a favoritos **/
function guardarFavoritos(req, res, next) {
    const idVideoJuego = req.body.idVideoJuego; // videojuego a agregar a favoritos
    const idUsuario = req.body.idUsuario; //identificador del usuario

    let docUsuario = await ModelUsuario.findById(idUsuario).exec();
    if (Object.keys(docUsuario).length === 0) {
        let error = new Error("No existe el usuario!");
        error.statusCode = 500;
        return next(error);
    }

    let docVideoJuego = await ModelVideoJuego.findById(idVideoJuego).exec();
    if (Object.keys(docVideoJuego).length === 0) {
        let error = new Error("No existe el videoJuego indicado!");
        error.statusCode = 500;
        return next(error);
    }

    return res.json({
        data: docUsuario.addFavorite(docVideoJuego)
    });
}

/**	eliminar de favoritos **/
function eliminarFavoritos(req, res, next) {
    const idVideoJuego = req.body.idVideoJuego; // videojuego a agregar a favoritos
    const idUsuario = req.body.idUsuario; //identificador del usuario

    let docUsuario = await ModelUsuario.findById(idUsuario).exec();
    if (Object.keys(docUsuario).length === 0) {
        let error = new Error("No existe el usuario!");
        error.statusCode = 500;
        return next(error);
    }

    let docVideoJuego = await ModelVideoJuego.findById(idVideoJuego).exec();
    if (Object.keys(docVideoJuego).length === 0) {
        let error = new Error("No existe el videoJuego indicado!");
        error.statusCode = 500;
        return next(error);
    }

    return res.json({
        data: docUsuario.removeFavorite(docVideoJuego)
    });
}

module.exports = {
    guardarFavoritos,
    eliminarFavoritos
};