const ModelVideoJuego = require("../models/videoJuego_model");

/**Error generico al identificar que no existe el videoJuego o ocurrio un error*/
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

//se buscan video juegos mediante algun filtro
function findByFilter(query, res, next) {
  ModelVideoJuego.find(query).exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items,
    });
  });
}

/** Listar videoJuegos por genero **/
function getxGenero(req, res, next) {
  let genero = req.params.genero;
  let query = genero != "undefined" ? { genero: genero, disponible: true } : {};

  findByFilter(query, res, next);
}

/** Listar videoJuegos por clasificacion **/ //TODO agregar filtro de disponible
function getxClasificacion(req, res, next) {
  let clasificacion = req.params.clasificacion;
  let query = clasificacion != "undefined" ? { clasificacion } : {};

  findByFilter(query, res, next);
}

/** Listar videoJuegos por clasificacion **/ //TODO agregar filtro de disponible
function getxDistribuidor(req, res, next) {
  let distribuidor = req.params.distribuidor;
  let query = distribuidor != "undefined" ? { distribuidor } : {};

  findByFilter(query, res, next);
}

/** Listar videoJuegos por clasificacion **/ //TODO agregar filtro de disponible
function getxDesarrollador(req, res, next) {
  let desarrollador = req.params.desarrollador;
  let query = desarrollador != "undefined" ? { desarrollador } : {};

  findByFilter(query, res, next);
}

/** get video juego x Id **/
function getVideoJuego(req, res, next) {
  let id = req.params.id; // se busca el videojuego por su id

  ModelVideoJuego.findById(id, (err, docVideoJuego) => {
    if (err || !docVideoJuego) return errorHandler(docVideoJuego, next, err);

    return res.json({
      data: docVideoJuego,
    });
  });
}

/**	Listar todos los video juegos **/
function listar(req, res, next) {
  ModelVideoJuego.find().exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items,
    });
  });
}

/**	Guardar Video Juego **/
function guardar(req, res, next) {
  let data = {
    consola: req.body.consola,
    nombre: req.body.nombre,
    genero: req.body.genero,
    clasificacion: req.body.clasificacion,
    descripcion: req.body.descripcion,
    distribuidor: req.body.distribuidor,
    desarrollador: req.body.desarrollador,
    poster: req.body.poster,
    disponible: req.body.disponible,
  };

  let modelVideoJuego = new ModelVideoJuego(data);

  modelVideoJuego.save((err, item) => {
    if (err || !item) return errorHandler(item, next, err);

    res.json({
      data: item,
    });
  });
}

/** Borrar videoJuego (no se elimina, solo se deja como no disponible)**/
function borrar(req, res, next) {
  let id = req.params.idVideoJuego; // se busca el videojuego por su id

  let data = {
    disponible: false,
  };

  ModelVideoJuego.findByIdAndUpdate(id, data, (err, docVideoJuego) => {
    if (err || !docVideoJuego) return errorHandler(docVideoJuego, next, err);

    return res.json({
      items: docVideoJuego,
    });
  });
}

//==========
//	Actualizar videoJuego
//==========
function update(req, res, next) {
  let id = req.params.idVideoJuego; // se busca por el id del video juego

  ModelVideoJuego.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, docProducto) => {
      if (err || !docProducto) return errorHandler(docProducto, next, err);

      return res.json({
        items: docProducto,
      });
    }
  );
}

module.exports = {
  getxGenero,
  getxClasificacion,
  getxDistribuidor,
  getxDesarrollador,
  getVideoJuego,
  listar,
  guardar,
  borrar,
  update,
};
