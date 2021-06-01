var mongoose = require("mongoose");

var schemaClasificacion = mongoose.Schema({
  nombre: {
    type: String,
    unique: "xxxx"
  },
  descripcion: {
    type: String,
  },
});

const model = mongoose.model("modelClasificacion", schemaClasificacion);

module.exports = model;
