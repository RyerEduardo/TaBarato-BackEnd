const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(bodyParser.json({limit: '10mb'}));
//app.use(cors()) 

mongoose
  .connect(
       process.env.MONGO_URL, //variavel de ambiente
    //'mongodb+srv://vitor:533596vsn@cluster0-mmqlk.mongodb.net/test?retryWrites=true&w=majority',
    // 'mongodb+srv://<USUARIO>:<SENHA>@cluster0-plxve.mongodb.net/node-api?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas go
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);