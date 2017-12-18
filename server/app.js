var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, '../public')));

const mongoose = require('mongoose');
mongoose.connect('mongodb://abdel:1234@ds135946.mlab.com:35946/angulardb',{
  useMongoClient: true,
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  },(err) => {
  if(err){
    console.log(err);
  }else{
    console.log("Connexion base de données OK !");
  }


} );

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app;
