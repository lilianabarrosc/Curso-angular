const ModelClasificacion = require("../models/clasificacion_model");

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

/** Listar Clasificacion **/
function listar(req, res, next) {
    //se buscan todas las clasificaciones existentes en la bd
    ModelClasificacion.find().exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items
    });
  });
}


/**	Get por Id Clasificacion **/
function getClasificacion(req, res, next) {
  let id = req.params.id; // se busca clasificaciones por su id

  ModelClasificacion.findById(id, (err, docClasificacion) => {
    if (err || !docClasificacion) return errorHandler(docClasificacion, next, err);

    return res.json({
      data: docClasificacion,
    });
  });
}


/**	Guardar Clasificacion **/
function guardar(req, res, next) {
  console.log(req.body);

  //data del modelo para crear la clasificacion
  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  };

  const modelClasificacion = new ModelClasificacion(data);
  modelClasificacion.save((err, docClasificacion) => {
    if (err || !docClasificacion) return errorHandler(docClasificacion, next, err);

    return res.json({ //se retorna la data que fue almacenada en la bd
      data: docClasificacion,
    });
  });
}

/** Borrar Clasificacion **/
function borrar(req, res, next) {
  const id = req.params.id; // se elimina una clasificacion mediante el id 
  ModelClasificacion.findByIdAndRemove(id, (err, docClasificacion) => {
    if (err || !docClasificacion) return errorHandler(docClasificacion, next, err);

    return res.json({ // se retorna el elemento eliminado de la bd
      data: docClasificacion,
    });
  });
}

//==========
//	Actualizar clasificacion
//==========
function update(req, res, next) {
  const id = req.params.id; // se actualiza clasificacion mediante su id

  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  };

  // si no existe la clasificacion, se crea; si existe se actualiza
  ModelClasificacion.findByIdAndUpdate(
    id,
    data,
    { new: true },
    (err, docClasificacion) => {
      if (err || !docClasificacion) return errorHandler(docClasificacion, next, err);

      return res.json({
        data: docClasificacion,
      });
    }
  );
}

module.exports = {
  listar,
  getClasificacion,
  guardar,
  borrar,
  update,
};