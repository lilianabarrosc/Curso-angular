var mongoose = require("mongoose");
const { validator_usuario,
  validator_videoJuego} = require('../validators/vComentario');

var Schema = mongoose.Schema;
var schemaComentario = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  usuario: {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "modelUsuario",
    },
    nombre_usuario: {
      type: String,
      required: true,
    },
  },
  videoJuego: {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'modelVideoJuego'
    },
    nombre: {
      type: String,
      required: true
    }
  }
});

/** validaciones a referencias de usuario y videoJuego **/
schemaComentario.path('usuario.id').validate(
  {
    validator: validator_usuario,
    message : 'Usuario debe existir!'
  }
);

schemaComentario.path('videoJuego.id').validate(
  {
    validator: validator_videoJuego,
    message : 'Video Juego debe existir!'
  }
); 

schemaComentario.methods.addUser = function (docUsuario) {
  if (JSON.stringify(this.usuario)=='{}') {
    this.usuario = {
      id: docUsuario._id,
      nombre_usuario: docUsuario.nombre_usuario
    };
  } else {
    console.log("Ya existe un usuario asociado al comentario");
    let err = new Error("Ya existe un usuario asociado al comentario");
    err.statusCode = 404;
    throw err;
  }

  return this;
};

schemaComentario.methods.addVideoJuego = function (docVideoJuego) {
  if (JSON.stringify(this.videoJuego)=='{}') {
    this.videoJuego = {
      id: docVideoJuego._id,
      nombre: docVideoJuego.nombre
    };
  } else {
    console.log("Ya existe un video juego asociado al comentario");
    let err = new Error("Ya existe un video juego asociado al comentario");
    err.statusCode = 404;
    throw err;
  }

  return this;
};

const model = mongoose.model("modelComentario", schemaComentario);

module.exports = model;
