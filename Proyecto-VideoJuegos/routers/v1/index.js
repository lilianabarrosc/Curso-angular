const clasificacionRouter = require('./clasificacion_router');

module.exports = (app) =>{

  app.use('/api/v1', clasificacionRouter);

}