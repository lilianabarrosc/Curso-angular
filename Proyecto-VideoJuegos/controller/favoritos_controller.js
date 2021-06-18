const ModelUsuario = require("../models/usuario_model");
const ModelVideoJuego = require("../models/videoJuego_model");

/**Error generico al identificar que no existe la clasificación*/
function errorHandler(data, next, err = null) {
    if (err) {
        // si no hay error pasa al siguiente paso
        return next(err);
    }

    if (!data) {
        // si no hay respuesta desde la bd, no se encuentró el registro
        let error = new Error("No existe !");
        error.statusCode = 404;
        return next(error);
    }
}

/**	agregar a favoritos **/
async function agregarFavorito(req, res, next) {
    const idVideoJuego = req.body.idVideoJuego; // videojuego a agregar a favoritos
    const idUsuario = req.body.idUsuario; //identificador del usuario

    try {
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
    } catch (error) {
        next(error);
    }
}

/**	eliminar de favoritos **/
async function eliminarFavorito(req, res, next) {
    const idVideoJuego = req.params.idVideoJuego; // videojuego a agregar a favoritos
    const idUsuario = req.params.idUsuario; //identificador del usuario

    try {
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
    } catch (error) {
        next(error);
    }
}

/** Listar Cometarios x usuario **/
function listarPorUsuario(req, res, next) {
    let id = req.params.idUsuario; //id del usuario
    try {
        if (id != undefined) {
            ModelUsuario.findById(id, (err, docUsuario) => {
                if (err || !docUsuario) return errorHandler(docUsuario, next, err);
                return res.json({
                    data: docUsuario.favoritos
                });
            });
        } else {
            let error = new Error("Debe indicar un id de usuario!");
            error.statusCode = 409;
            return next(error);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    agregarFavorito,
    eliminarFavorito,
    listarPorUsuario
};