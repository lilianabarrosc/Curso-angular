var mongoose = require("mongoose");

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
schemaProducto.path('usuario').validate(
  {
    validator: usuario,
    message : 'Usuario debe existir!'
  }
);

schemaProducto.path('videoJuego').validate(
  {
    validator: videoJuego,
    message : 'Video Juego debe existir!'
  }
);

schemaComentario.methods.addUser = function (docUsuario) {
  if (!this.usuario) {
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
  if (!this.usuario) {
    this.usuario = {
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
