const ModelGenero = require("../models/genero_model");

/**Error generico al identificar que no existe el genero*/
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

/** Listar Genero **/
function listar(req, res, next) {
    //se buscan todos los generos existentes en la bd
    ModelGenero.find().exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items
    });
  });
}


/**	Get por Id Genero **/
function getGenero(req, res, next) {
  let id = req.params.id; // se busca generos por su id

  ModelGenero.findById(id, (err, docGenero) => {
    if (err || !docGenero) return errorHandler(docGenero, next, err);

    return res.json({
      data: docGenero,
    });
  });
}


/**	Guardar Genero **/
function guardar(req, res, next) {
  console.log(req.body);

  //data del modelo para crear el genero
  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  };

  const modelGenero = new ModelGenero(data);
  modelGenero.save((err, docGenero) => {
    if (err || !docGenero) return errorHandler(docGenero, next, err);

    return res.json({ //se retorna la data que fue almacenada en la bd
      data: docGenero,
    });
  });
}

/** Borrar Genero **/
function borrar(req, res, next) {
  const id = req.params.id; // se elimina un genero mediante el id 
  ModelGenero.findByIdAndRemove(id, (err, docGenero) => {
    if (err || !docGenero) return errorHandler(docGenero, next, err);

    return res.json({ // se retorna el elemento eliminado de la bd
      data: docGenero,
    });
  });
}

//==========
//	Actualizar genero
//==========
function update(req, res, next) {
  const id = req.params.id; // se actualiza genero mediante su id

  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  };

  // si no existe el genero, se crea; si existe se actualiza
  ModelGenero.findByIdAndUpdate(
    id,
    data,
    { new: true },
    (err, docGenero) => {
      if (err || !docGenero) return errorHandler(docGenero, next, err);

      return res.json({
        data: docGenero,
      });
    }
  );
}

module.exports = {
  listar,
  getGenero,
  guardar,
  borrar,
  update,
};