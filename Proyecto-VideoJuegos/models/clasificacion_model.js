var mongoose = require("mongoose");

var schemaClasificacion = mongoose.Schema({
  nombre: {
    type: String,
    unique: "xxxx",
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
});

const model = mongoose.model("modelClasificacion", schemaClasificacion);

module.exports = model;
