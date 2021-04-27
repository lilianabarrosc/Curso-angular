var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schemaUsuario = new Schema({
  nombre: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    default: 'USER_ROLE',
  },
  disponible: {
    type: Boolean,
    default: true
  },
  cart: {
    items: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'modelProducto'
      },
      cantidad: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      }
    }]
  }
});

// (docUsuario) -> this
//reduce carro /
schemaUsuario.methods.addCarro = function(docProducto){

  let index = this.cart.items.findIndex( item => {
    return item.productId.toString() == docProducto._id.toString()
  });

  console.log('index:',index);

  let _cantidad = 1;
  let newCartItems = [...this.cart.items];

  //newCartItems[ 0, 1, 2]
  //delete newCartItems[1]
  //this.cart.items = newCartItems;
  //this.save();



  if(index >= 0){
    _cantidad = this.cart.items[index].cantidad +1;
    newCartItems[index].cantidad = _cantidad;
    newCartItems[index].total = _cantidad * docProducto.precio;
  }else{
     newCartItems.push({
      productId : docProducto._id,
      cantidad: _cantidad,
      total: docProducto.precio
    })
  }
  
  this.cart.items = newCartItems;
  return this.save();

}

//eliminar producto de carrito
schemaUsuario.methods.deleteCarro = function(docProducto){

  let index = this.cart.items.findIndex( item => {
    return item.productId.toString() == docProducto._id.toString()
  });

  console.log('index:',index);

  let newCartItems = [...this.cart.items];

  if(index >= 0){ // si existe se elimina
    var _cantidad = this.cart.items[index].cantidad -1;
    //si posee mas de un producto del mismo tipo, se resta la cantidad y valor
    if(_cantidad > 0){
      newCartItems[index].cantidad = _cantidad;
      newCartItems[index].total = _cantidad * docProducto.precio;
    }else{
      newCartItems.splice(index, 1);
    }
    
    this.cart.items = newCartItems;
    return this.save();
  }else{
     console.log("no se encuentra el producto en el carrito");
     let err =  new Error('No Existe producto en el carrito');
     err.statusCode = 404;
     throw(err);
  }

}

schemaUsuario.methods.clearCarrito = function(){

  this.cart = { items: [] };
  return this.save();

}


const model = mongoose.model('modelUsuario', schemaUsuario);

module.exports = model;