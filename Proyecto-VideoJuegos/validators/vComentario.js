const ModelUsuario = require('../models/usuario_model');

const validator_usuario = async (val) =>{
  let resp = await ModelUsuario.exists(
    { _id : val }
  );
  
  return resp;
}