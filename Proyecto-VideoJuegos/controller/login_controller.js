
const { body, validationResult } = require('express-validator');
const ModelUsuario = require('../models/usuario_model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

function errorHandler(data, next, err = null) {

  if (err) {
    return next(err);
  }

  if (!data) {

    let error = new Error('No existe !');
    error.statusCode = 404;
    return next(error)

  }
}

/*** Iniciar sesion como usuario con email y contrasenia */
function login(req, res, next) {

  let email = req.body.email; //email del usuario
  let contrasenia = req.body.contrasenia; //clave del usuario

  ModelUsuario.findOne({ email: email }, (err, docUsuario) => {

    if (err || !docUsuario) return errorHandler(docUsuario, next, err);

    if (!bcrypt.compareSync(contrasenia, docUsuario.contrasenia)) {
      return res.status(404).json({
        message: 'usuario o contrasenia incorrecto'
      })
    }

    //data para crear el token
    let data = {
      usuarioId: docUsuario._id,
      role: docUsuario.role
    }

    //se genera token
    let token = jwt.sign(data, process.env.TOKEN_KEY, { expiresIn: process.env.CADUCIDAD_TOKEN });
    let usuario = docUsuario.toObject();

    return res.json({
      usuario: {
        usuarioId: usuario._id,
        email: usuario.email,
        rol: usuario.role
      },
      token: token
    });
  });
}

/** registro de usuario */
function signup(req, res, next) {
  const salt = bcrypt.genSaltSync();

  let data = {
    nombre_usuario: req.body.nombre_usuario,
    email: req.body.email,
    contrasenia: bcrypt.hashSync(req.body.contrasenia, salt),
    role: req.body.role
  }

  let modelusuario = new ModelUsuario(data);
  modelusuario.save((err, docUsuario) => {
    if (err || !docUsuario) return errorHandler(docUsuario, next, err)

    let payload = {
      usuarioId: docUsuario._id,
      role: docUsuario.role
    }

    let token = jwt.sign(
      payload,
      process.env.TOKEN_KEY,
      { expiresIn: process.env.CADUCIDAD_TOKEN, }
    )

    return res.json({
      usuario: {
        usuarioId: docUsuario._id,
        email: docUsuario.nombre_usuario,
        role: docUsuario.role
      },
      token: token
    });
  })
}

module.exports = {
  signup,
  login
}
