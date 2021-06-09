var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var schemaDistribuidor = new Schema({
  nombre: {
    type: String,
    unique: "xxxx",
    required: true
  }
});

const model = mongoose.model("modelDistribuidor", schemaDistribuidor);

module.exports = model;
