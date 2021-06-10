const ModelUsuario = require("../models/usuario_model");
const bcrypt = require("bcrypt");

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
function listar(req, res, next) {
  //se buscan todos los usuarios existentes en la bd
  ModelUsuario.find()
    .select("-contrasenia -favoritos")
    .exec((err, items) => {
      if (err || !items) return errorHandler(items, next, err);

      return res.json({
        items: items,
      });
    });
}

/**	Get por Id Usuario **/
function getUsuario(req, res, next) {
  let id = req.params.id; // se busca usuarios por su id

  ModelUsuario.findById(id, (err, docUsuario) => {
    if (err || !docUsuario) return errorHandler(docUsuario, next, err);

    let user = docUsuario.toObject();
    delete user.contrasenia;
    delete user.favoritos;

    return res.json({
      data: user,
    });
  });
}

/**	Guardar Usuario **/
function guardar(req, res, next) {
  console.log(req.body);

  //data del modelo para crear la usuario
  const salt = bcrypt.genSaltSync();
  let data = {
    nombre_usuario: req.body.nombre_usuario,
    contrasenia: bcrypt.hashSync(req.body.contrasenia, salt),
    email: req.body.email,
  };

  const modelUsuario = new ModelUsuario(data);
  modelUsuario.save((err, docUsuario) => {
    if (err || !docUsuario) return errorHandler(docUsuario, next, err);

    let user = docUsuario.toObject();
    delete user.contrasenia;
    delete user.favoritos;

    return res.json({
      data: user,
    });
  });
}

/** Borrar Usuario **/
function borrar(req, res, next) {
  const id = req.params.id; // se elimina una usuario mediante el id
  let data = {
    vigente: false,
  };

  ModelUsuario.findByIdAndUpdate(id, data, (err, docUsuario) => {
    if (err || !docUsuario) return errorHandler(docUsuario, next, err);

    let user = docUsuario.toObject();
    delete user.contrasenia;
    delete user.favoritos;

    return res.json({
      data: user,
    });
  });
}

//==========
//	Actualizar usuario
//==========
function update(req, res, next) {
  const id = req.params.id; // se actualiza usuario mediante su id

  const salt = bcrypt.genSaltSync();
  let data = {
    contrasenia: bcrypt.hashSync(req.body.contrasenia, salt),
    role: req.body.role,
  };

  // si no existe la usuario, se crea; si existe se actualiza
  ModelUsuario.findByIdAndUpdate(id, data, { new: true }, (err, docUsuario) => {
    if (err || !docUsuario) return errorHandler(docUsuario, next, err);

    let user = docUsuario.toObject();
    delete user.contrasenia;
    delete user.favoritos;

    return res.json({
      data: user,
    });
  });
}

module.exports = {
  listar,
  getUsuario,
  guardar,
  borrar,
  update,
};
