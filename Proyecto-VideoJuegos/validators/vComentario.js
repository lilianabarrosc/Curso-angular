const ModelUsuario = require('../models/usuario_model');
const ModelVideoJuego = require('../models/videoJuego_model');

const validator_usuario = async (val) =>{
  let resp = await ModelUsuario.exists(
    { _id : val }
  );
  return resp;
}

const validator_videoJuego = async (val) =>{
  let resp = await ModelVideoJuego.exists(
    { _id : val }
  );
  return resp;
}

module.exports = {
  validator_usuario,
  validator_videoJuego
}