const clasificacionRouter = require('./clasificacion_router');
const desarrolladorRouter = require('./desarrollador_router');

var ruteApi = '/api/v1';
module.exports = (app) =>{

  app.use(ruteApi, clasificacionRouter);
  app.use(ruteApi, desarrolladorRouter);

}