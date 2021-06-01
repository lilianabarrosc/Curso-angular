var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaDesarrollador = new Schema({
  nombre: {
    type: String,
    unique: "xxxx"
  }
});

const model = mongoose.model("modelDesarrollador", schemaDesarrollador);

module.exports = model;