const ModelComentario = require("../models/comentario_model");
const ModelUsuario = require('../models/usuario_model');
const ModelVideoJuego = require('../models/videoJuego_model');

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

/** Listar Cometarios x videoJuego **/
function listarPorVideoJuego(req, res, next) {
  let videoJuegoId = req.params.videoJuegoId; //id del videojuego
  let query =
    videoJuegoId != "undefined" ? { "videoJuego.id": videoJuegoId } : {};

  //se buscan todas las clasificaciones existentes en la bd
  if (Object.keys(query).length === 0) {
    let error = new Error("Se debe indicar el identificador del video juego !!");
    error.statusCode = 404;
    return next(error);
  }

  try {
    ModelComentario.find(query).exec((err, items) => {
      if (err || !items) return errorHandler(items, next, err);

      return res.json({
        items: items,
      });
    });
  } catch (error) {
    next(error);
  }
}

//==========
//	Guardar Comentario
//==========
async function guardar(req, res, next) {
  const idVideoJuego = req.body.idVideoJuego; // se elimina un comenatrio mediante el id
  const idUsuario = req.body.idUsuario; //identificador del usuario asociado al comentario

  let data = {
    descripcion: req.body.descripcion,
  };

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

    let modelComentario = new ModelComentario(data);
    modelComentario.addUser(docUsuario);
    modelComentario.addVideoJuego(docVideoJuego);


    modelComentario.save((err, docComentario) => {
      if (err || !docComentario) return errorHandler(docComentario, next, err);

      res.json({
        data: docComentario,
      });
    });
  } catch (error) {
    next(error);
  }
}

/** Borrar comentario **/
function borrar(req, res, next) {
  const idComentario = req.params.idComentario; // se elimina un comenatrio mediante el id
  const idUsuario = req.params.idUsuario; //TODO solo el usuario que realiza el comentario lo puede eliminar

  const query =
    idComentario !== undefined && idUsuario !== undefined
      ? { _id: idComentario, "usuario.id": idUsuario }
      : {};

  try {
    ModelComentario.findOneAndRemove(query, (err, docComentario) => {
      if (err || !docComentario) return errorHandler(docComentario, next, err);

      return res.json({
        // se retorna el elemento eliminado de la bd
        data: docComentario,
      });
    });
  } catch (error) {
    next(error);
  }
}

/**	Actualizar comenatio **/
function update(req, res, next) {
  const idComentario = req.params.idComentario; // se actualiza un comenatrio mediante el id
  const idUsuario = req.params.idUsuario; //todo solo el usuario que realiza el comentario lo puede actualizar

  const query =
    idComentario !== undefined && idUsuario !== undefined
      ? { _id: idComentario, "usuario.id": idUsuario }
      : {};

  let data = {
    descripcion: req.body.descripcion,
  };

  try {
    ModelComentario.findOneAndUpdate(query, data, (err, docProducto) => {
      if (err || !docProducto) return errorHandler(docProducto, next, err);

      return res.json({
        items: docProducto,
      });
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarPorVideoJuego,
  guardar,
  borrar,
  update
};
