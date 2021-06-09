var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaGenero = new Schema({
  nombre: {
    type: String,
    unique: "xxxx",
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});

const model = mongoose.model("modelGenero", schemaGenero);

module.exports = model;