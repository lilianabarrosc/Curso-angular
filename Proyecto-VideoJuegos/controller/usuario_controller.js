const ModelUsuario = require("../models/usuario_model");

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

/** Listar Usuario **/
function listar(req, res) {
  //se buscan todos los usuarios existentes en la bd
  ModelUsuario.find().select('-contrasenia, -favoritos').exec((err, items) => {
    if (err || !items) return errorHandler(items, next, err);

    return res.json({
      items: items,
    });
  });
}

/**	Get por Id Usuario **/
function getUsuario(req, res) {
  let id = req.params.id; // se busca usuarios por su id

  ModelUsuario.findById(id, (err, docUsuario) => {
    if (err || !docUsuario)
      return errorHandler(docUsuario, next, err);

    return res.json({
      data: docUsuario,
    });
  });
}

/**	Guardar Usuario **/
function guardar(req, res, next) {
  console.log(req.body);

  //data del modelo para crear la usuario
  //TODO verificar si se crea la lista vacia de favoritos
  let data = {
    nombre_usuario: req.body.nombre_usuario,
    contrasenia: req.body.contrasenia,
    email: req.body.email
  };

  const modelUsuario = new ModelUsuario(data);
  modelUsuario.save((err, docUsuario) => {
    if (err || !docUsuario)
      return errorHandler(docUsuario, next, err);

    return res.json({
      //se retorna la data que fue almacenada en la bd
      data: docUsuario,
    });
  });
}

/** Borrar Usuario **/
function borrar(req, res) {
  const id = req.params.id; // se elimina una usuario mediante el id
  ModelUsuario.findByIdAndRemove(id, (err, docUsuario) => {
    if (err || !docUsuario)
      return errorHandler(docUsuario, next, err);

    return res.json({
      // se retorna el elemento eliminado de la bd
      data: docUsuario,
    });
  });
}

//==========
//	Actualizar usuario
//==========
function update(req, res) {
  const id = req.params.id; // se actualiza usuario mediante su id

  let data = {
    contrasenia: req.body.contrasenia,
    role: req.body.role,
  };

  // si no existe la usuario, se crea; si existe se actualiza
  ModelUsuario.findByIdAndUpdate(
    id,
    data,
    { new: true },
    (err, docUsuario) => {
      if (err || !docUsuario)
        return errorHandler(docUsuario, next, err);

      return res.json({
        data: docUsuario,
      });
    }
  );
}

module.exports = {
  listar,
  getUsuario,
  guardar,
  borrar,
  update,
};
