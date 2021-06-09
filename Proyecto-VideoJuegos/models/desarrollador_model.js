var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaDesarrollador = new Schema({
  nombre: {
    type: String,
    unique: "xxxx",
    required: true
  }
});

const model = mongoose.model("modelDesarrollador", schemaDesarrollador);

module.exports = model;