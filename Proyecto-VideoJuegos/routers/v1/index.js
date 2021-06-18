const clasificacionRouter = require('./clasificacion_router');
const desarrolladorRouter = require('./desarrollador_router');
const distribuidorRouter = require('./distribuidor_router');
const generoRouter = require('./genero_router');
const usuarioRouter = require('./usuario_router');
const videoJuegoRouter = require('./videoJuego_router');
const favoritosRouter = require('./favoritos_router');

var ruteApi = '/api/v1';
module.exports = (app) =>{

  app.use(ruteApi, clasificacionRouter);
  app.use(ruteApi, desarrolladorRouter);
  app.use(ruteApi, distribuidorRouter);
  app.use(ruteApi, generoRouter);
  app.use(ruteApi, usuarioRouter);
  app.use(ruteApi, videoJuegoRouter);
  app.use(ruteApi, favoritosRouter);
}