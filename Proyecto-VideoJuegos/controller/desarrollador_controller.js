const ModelDesarrollador = require("../models/desarrollador_model");

/**Error generico al identificar que no existe el desarrollador*/
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

/** Listar Desarrollador **/
function listar(req, res, next) {
    //se buscan todas los desarrolladores existentes en la bd
    ModelDesarrollador.find().exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items
    });
  });
}


/**	Get por Id Desarrollador **/
function getDesarrollador(req, res, next) {
  let id = req.params.id; // se busca desarrollador por su id

  ModelDesarrollador.findById(id, (err, docDesarrollador) => {
    if (err || !docDesarrollador) return errorHandler(docDesarrollador, next, err);

    return res.json({
      data: docDesarrollador,
    });
  });
}


/**	Guardar Desarrollador **/
function guardar(req, res, next) {
  console.log(req.body);

  //data del modelo para crear el desarrollador
  let data = {
    nombre: req.body.nombre
  };

  const modelDesarrollador = new ModelDesarrollador(data);
  modelDesarrollador.save((err, docDesarrollador) => {
    if (err || !docDesarrollador) return errorHandler(docDesarrollador, next, err);

    return res.json({ //se retorna la data que fue almacenada en la bd
      data: docDesarrollador,
    });
  });
}

/** Borrar Desarrollador **/
function borrar(req, res, next) {
  const id = req.params.id; // se elimina un desarrollador mediante el id 
  ModelDesarrollador.findByIdAndRemove(id, (err, docDesarrollador) => {
    if (err || !docDesarrollador) return errorHandler(docDesarrollador, next, err);

    return res.json({ // se retorna el elemento eliminado de la bd
      data: docDesarrollador,
    });
  });
}

//==========
//	Actualizar Desarrollador
//==========
function update(req, res, next) {
  const id = req.params.id; // se actualiza Desarrollador mediante su id

  let data = {
    nombre: req.body.nombre
  };

  // si no existe el desarrollador, se crea; si existe se actualiza
  ModelDesarrollador.findByIdAndUpdate(
    id,
    data,
    { new: true },
    (err, docDesarrollador) => {
      if (err || !docDesarrollador) return errorHandler(docDesarrollador, next, err);

      return res.json({
        data: docDesarrollador,
      });
    }
  );
}

module.exports = {
  listar,
  getDesarrollador,
  guardar,
  borrar,
  update,
};