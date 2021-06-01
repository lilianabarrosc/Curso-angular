var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaGenero = new Schema({
  nombre: {
    type: String,
    unique: "xxxx"
  },
  descripcion: {
    type: String
  }
});

const model = mongoose.model("modelGenero", schemaGenero);

module.exports = model;