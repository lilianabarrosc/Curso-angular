const ModelGenero = require('../models/genero_model');
const ModelClasificacion = require('../models/clasificacion_model');
const ModelDistribuidor = require('../models/distribuidor_model');
const ModelDesarrollador = require('../models/desarrollador_model');

const validator_genero = async (val) =>{
  let resp = await ModelGenero.exists(
    { nombre : val }
  );
  
  return resp;
}

const validator_clasificacion = async (val) =>{
  let resp = await ModelClasificacion.exists(
    { nombre : val }
  );
  
  return resp;
}

const validator_distribuidor = async (val) =>{
  let resp = await ModelDistribuidor.exists(
    { nombre : val }
  );
  
  return resp;
}

const validator_desarrollador = async (val) =>{
  let resp = await ModelDesarrollador.exists(
    { nombre : val }
  );
  
  return resp;
}

module.exports = {
    validator_genero,
    validator_clasificacion,
    validator_distribuidor,
    validator_desarrollador
  };