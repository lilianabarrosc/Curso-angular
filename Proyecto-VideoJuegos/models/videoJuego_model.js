var mongoose = require('mongoose');

const {
  validator_genero,
    validator_clasificacion,
    validator_distribuidor,
    validator_desarrollador
} = require('../validators/vVideoJuego');

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
schemaVideoJuego.path('genero').validate(
  {
    validator: validator_genero,
    message : 'Genero indicado no Existe!'
  }
);

schemaVideoJuego.path('clasificacion').validate(
  {
    validator: validator_clasificacion,
    message : 'Clasificacion indicado no Existe!'
  }
);

schemaVideoJuego.path('distribuidor').validate(
  {
    validator: validator_distribuidor,
    message : 'Distribuidor indicado no Existe!'
  }
);

schemaVideoJuego.path('desarrollador').validate(
  {
    validator: validator_desarrollador,
    message : 'Desarrollador indicado no Existe!'
  }
);

const model = mongoose.model("modelVideoJuego", schemaVideoJuego);

module.exports = model;
