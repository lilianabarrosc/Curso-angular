const autorRouter = require('./autor_router');
const libroRouter = require('./libro_router');
const prestamoRouter = require('./prestamo_router');
const usuarioRouter = require('./usuario_router');

module.exports = (app) => {
    app.use('/api/v1', autorRouter);
    app.use('/api/v1', libroRouter);
    app.use('/api/v1', prestamoRouter);
    app.use('/api/v1', usuarioRouter);
}