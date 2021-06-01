//Modulos Terceros
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')


//Modulos Propios
const routerV1 = require('./routers/v1/index');


console.log(` -${process.env.NODE_ENV}- `); //produccion
console.log(` -${__dirname}- `); //desarrollo

if(process.env.NODE_ENV === 'desarrollo' ){
  require('dotenv').config({path: `${__dirname}/.env.desarrollo`})
}else if(process.env.NODE_ENV === 'produccion' ){
  require('dotenv').config()
}

///////EXPRESS
const app = express();
app.use( express.json() )

//////MIDDELWARE
//-Definir public static
app.use(express.static('public'));

app.use(cors());

//////////////ROUTES
routerV1(app);


/////////////ANDLER
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

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(  ()=>{
  console.log('Mongo Ok');
})


app.listen(process.env.PORT, ()=>{
  console.log('Servidor Ok 8080');
})
