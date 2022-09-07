const mongoose = require('mongoose');
const {URI,config} = require('./config')

mongoose.connect(URI, config)
.then(()=>{console.log('****Conectado a la DataBase****')})
.catch((err)=>{console.error(err)})
