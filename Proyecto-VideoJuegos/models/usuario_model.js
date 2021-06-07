var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var schemaUsuario = new Schema({
  nombre_usuario: {
    type: String,
    required: true,
  },
  contrasenia: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  favoritos: [
    {
      id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "modelVideoJuego",
      },
      nombre: {
        type: String,
        required: true,
      },
      poster: {
        type: String,
        required: true,
      },
    },
  ],
  role: {
    type: String,
    default: 'USER_ROLE'
  },
  vigente: {
    type: Boolean,
    default: true
  }
});

schemaUsuario.methods.addFavorite = function (docVideoJuego) {
  let index = this.favoritos.findIndex((item) => {
    return item.id.toString() == docVideoJuego._id.toString();
  });

  console.log("index:", index);

  let newFavorite = [...this.favoritos];

  if (index >= 0) {
    newFavorite.push({
      id: docVideoJuego._id,
      nombre: docVideoJuego.nombre,
      poster: docVideoJuego.poster,
    });
  }else{
    console.log("Ya existe video juego en lista de favoritos");
    let err = new Error("Ya existe video juego en lista de favoritos");
    err.statusCode = 404;
    throw err;
  }

  this.favoritos = newFavorite;
  return this.save();
};

schemaUsuario.methods.removeFavorite = function (docVideoJuego) {
  let index = this.favoritos.findIndex((item) => {
    return item.id.toString() == docVideoJuego._id.toString();
  });

  console.log("index:", index);

  let newFavorite = [...this.favoritos];

  if (index >= 0) {
    // si existe se elimina
    newFavorite.splice(index, 1);
    this.favoritos = newFavorite;
    return this.save();
  } else {
    console.log("No se encuentra el video juego en lista de favoritos");
    let err = new Error("No existe el video juego en lista de favoritos");
    err.statusCode = 404;
    throw err;
  }
};

const model = mongoose.model("modelUsuario", schemaUsuario);

module.exports = model;
