const ModelProducto = require('../models/producto_model');
const ModelUsuario = require('../models/usuario_model');

//==========
//	Add Carro
//==========
const addCarro = async (req, res, next) => {

  let productId = req.body.productId;
  let usuarioId = req.body.usuarioId;

  try {
    docProducto = await ModelProducto.findById(productId).exec()
    console.log(docProducto);

    if(!docProducto){
      err =  new Error('No Existe')
      err.statusCode = 404;
      throw(err);
    }

    docUsuario = await ModelUsuario.findById(usuarioId).exec();
  
    docUsuario = await docUsuario.addCarro(docProducto);

    res.json(docUsuario)


  } catch (error) {
    next(error);
  }

  
  docUsuario = await ModelUsuario.find

  

}

//==========
//	Listar Carro
//==========

const listarCarro = (req, res)=>{

  console.log('listarCarro');
  
  ModelUsuario.findById(req.params.id).
    populate('cart.items.productId','-imagen').exec( (err, items) => {
    if(err){
      return res.json(err);
    }

    return res.json(items)
  });

  //callbaks -> 

  //==========
  // callbaks
  // 1	ModelUsuario.findById(req.params.id , (err, data) => { data }
  // exec
  //  1 Promesa -  ModelUsuario.findById(req.params.id).exec()
  //            doc = await ModelUsuario.findById(req.params.id).exec()
  // exec
  // 2 Callback  - ModelUsuario.findById(req.params.id).exec( (err, data) => { data }
  //       
  //==========



}

//==========
//	Limpiar Carro
//==========

const clearCarr = async (req, res) => {

  let docUsuario = await ModelUsuario.findById(req.params.id).exec()
  console.log('before clear cart docUsuario:',docUsuario);

  docUsuario = await docUsuario.clearCarrito();
  console.log('after clear cart docUsuario:',docUsuario);

  return res.json(docUsuario)
}

//==========
//	Eliminar Carro
//==========
const deleteCarro = async (req, res, next) => {
  let productId = req.body.productId;
  let usuarioId = req.body.usuarioId;

  try {
    docProducto = await ModelProducto.findById(productId).exec()
    console.log(docProducto);

    if(!docProducto){
      err =  new Error('No Existe')
      err.statusCode = 404;
      throw(err);
    }

    docUsuario = await ModelUsuario.findById(usuarioId).exec();
  
    docUsuario = await docUsuario.deleteCarro(docProducto);

    res.json(docUsuario)


  } catch (error) {
    next(error);
  }

  
  docUsuario = await ModelUsuario.find

  

}

module.exports ={
  addCarro,
  listarCarro,
  clearCarr,
  deleteCarro
}