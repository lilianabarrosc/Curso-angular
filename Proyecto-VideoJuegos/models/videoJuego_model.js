var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaVideoJuego = new Schema({
  consola: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  clasificacion: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  distribuidor: {
    type: String,
    required: true
  },
  desarrollador: {
    type: String,
    required: true
  },
  poster: {
    type: String
  }
});

const model = mongoose.model("modelVideoJuego", schemaVideoJuego);

module.exports = model;
