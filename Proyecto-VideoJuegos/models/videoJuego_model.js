var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaVideoJuego = new Schema({
  consola: {
    type: String,
    required: 'Nombre consola requerido'
  },
  nombre: {
    type: String,
    required: 'Nombre video juego requerido'
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
    required: 'Descripción video juego requerido'
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
  },
  disponible: {
    type: Boolean,
    default: true
  }
});

/** validaciones a referencias de genero, clasificacion, distribuidor, desarrollador **/
schemaProducto.path('genero').validate(
  {
    validator: genero,
    message : 'Genero indicado no Existe!'
  }
);

schemaProducto.path('clasificacion').validate(
  {
    validator: clasificacion,
    message : 'Clasificacion indicado no Existe!'
  }
);

schemaProducto.path('distribuidor').validate(
  {
    validator: distribuidor,
    message : 'Distribuidor indicado no Existe!'
  }
);

schemaProducto.path('desarrollador').validate(
  {
    validator: desarrollador,
    message : 'Desarrollador indicado no Existe!'
  }
);

const model = mongoose.model("modelVideoJuego", schemaVideoJuego);

module.exports = model;
