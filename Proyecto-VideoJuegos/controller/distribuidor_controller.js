const ModelDistribuidor = require("../models/distribuidor_model");

/**Error generico al identificar que no existe el distribuidor*/
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

/** Listar Distribuidor **/
function listar(req, res) {
    //se buscan todas los distribuidor existentes en la bd
    ModelDistribuidor.find().exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items
    });
  });
}


/**	Get por Id Distribuidor **/
function getDistribuidor(req, res) {
  let id = req.params.id; // se busca distribuidor por su id

  ModelDistribuidor.findById(id, (err, docDistribuidor) => {
    if (err || !docDistribuidor) return errorHandler(docDistribuidor, next, err);

    return res.json({
      data: docDistribuidor,
    });
  });
}


/**	Guardar Distribuidor **/
function guardar(req, res, next) {
  console.log(req.body);

  //data del modelo para crear el distribuidor
  let data = {
    nombre: req.body.nombre
  };

  const modelDistribuidor = new ModelDistribuidor(data);
  modelDistribuidor.save((err, docDistribuidor) => {
    if (err || !docDistribuidor) return errorHandler(docDistribuidor, next, err);

    return res.json({ //se retorna la data que fue almacenada en la bd
      data: docDistribuidor,
    });
  });
}

/** Borrar Distribuidor **/
function borrar(req, res) {
  const id = req.params.id; // se elimina un distribuidor mediante el id 
  ModelDistribuidor.findByIdAndRemove(id, (err, docDistribuidor) => {
    if (err || !docDistribuidor) return errorHandler(docDistribuidor, next, err);

    return res.json({ // se retorna el elemento eliminado de la bd
      data: docDistribuidor,
    });
  });
}

//==========
//	Actualizar Distribuidor
//==========
function update(req, res) {
  const id = req.params.id; // se actualiza Distribuidor mediante su id

  let data = {
    nombre: req.body.nombre
  };

  // si no existe el distribuidor, se crea; si existe se actualiza
  ModelDistribuidor.findByIdAndUpdate(
    id,
    data,
    { new: true },
    (err, docDistribuidor) => {
      if (err || !docDistribuidor) return errorHandler(docDistribuidor, next, err);

      return res.json({
        data: docDistribuidor,
      });
    }
  );
}

module.exports = {
  listar,
  getDistribuidor,
  guardar,
  borrar,
  update,
};