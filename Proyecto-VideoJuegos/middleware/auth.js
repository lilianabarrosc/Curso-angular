const jwt = require('jsonwebtoken');

//Valida si posee token de usuario y obtiene data
const isAuth = (req, res, next) => {
  let token = req.get('Authorization');
  console.log('Header token:', token);

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      err.statusCode = 403; //no esta autorizado
      next(err);
    }

    console.log('decoded:', decoded);
    req.usuario = decoded;
    next();
  });
}

//se determina el rol del usuario sea administrador
const isAdmin = (req, res, next) => {

  let usuario = req.usuario;
  if (usuario.role === 'ADMIN_ROLE') {
    next();
  } else {
    let err = new Error('Rol no valido');
    err.statusCode = 403;
    next(err)
  }
}

// renovar token expirado
const renewToken = async (req, res = response) => {
  //const uid = req.usuario.uid;
  let { iat, exp, ...payload } = req.usuario;

  let token = jwt.sign(
    payload,
    process.env.TOKEN_KEY,
    { expiresIn: process.env.CADUCIDAD_TOKEN, }
  )

  res.json({
    token
  });
}

module.exports = {
  isAuth,
  isAdmin,
  renewToken
}