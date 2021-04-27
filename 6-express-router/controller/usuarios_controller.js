const express = require('express');
const app = express();
const ModelUsuario = require('../models/usuario_model');


const data = [
  {
    id: 123,
    usuario: "user1"
  },{
    id: 124,
    usuario: "user2"
  }
];


//==========
//	Listar Usuarios
//==========

function listar(req, res) {
  res.json({
    data
  })
}


//==========
//	Guardar Usuarios
//==========
function guardar(req, res){
  let data = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password
  }

  let modelUsuario = new ModelUsuario(data);

  modelUsuario.save( (err, docUsuario)  => {

    if(err || !docUsuario) return errorHandler(docUsuario, next, err);
    docUsuario = docUsuario.toObject();

    res.json({
      data : docUsuario
    })

  })
}


//==========
// Borrar Usuarios 
//==========
function borrar(req, res){
  res.json({
      message: "Guardado"
    });
}

//==========
//	Actualizar Usuarios
//==========
function update(req, res){
res.json({
    message: "Guardado"
  });
}

module.exports = {
  listar,
  guardar,
  borrar,
  update
}

