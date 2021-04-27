//Modulos Terceros
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');


//Modulos Propios
const routerV1 = require('./routers/v1/index');
// const routerV2 = require('./routers/v2/index');



console.log(` -${process.env.NODE_ENV}- `); //produccion
console.log(` -${__dirname}- `); //desarrollo

if(process.env.NODE_ENV === 'desarrollo' ){
  require('dotenv').config({path: `${__dirname}/.env.desarrollo`})
}else if(process.env.NODE_ENV === 'produccion' ){
  require('dotenv').config()
}


///////EXPRESS
const app = express();
//Middelware  - body json  
//req.body.xxxxx
app.use( express.json() )

//Middelware - file upload
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));


app.use( (req, res, next) =>{
  console.log('Hola soy retorno clase ');
  next();
} )

//ROUTES
routerV1(app);


//HANDLER
app.use(function(err, req, res, next) {


  console.error(err);

  const status = err.statusCode || 500; 
  const message = err.message;
  const data = err.data;

  res.status(status).json({
    message: message,
    data: data
  })


});

// mongodb+srv://node5Gen:nSQMYUS2XlfuHNDv@cluster0.heeey.mongodb.net/test
// nSQMYUS2XlfuHNDv

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(  ()=>{
  console.log('Mongo Ok');
  
})


app.listen(8080, ()=>{
  console.log('Servidor Ok 8080');
  
})
