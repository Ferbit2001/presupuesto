require('./db/db');
const express = require('express')
const cors = require('cors')
const app = express()

// set api routes

require('./src/routes/api')(app)

// configuration api

app.use(cors())
app.use(express.json())

// setting view engine

app.set('view engine', 'pug')
app.set('views', './views')

// setting public folder to access 

app.use('/', express.static(__dirname+'/public'))

// setting public routes

app.use('/',require('./routes'))

app.listen(80,"0.0.0.0",()=>console.log('*****Server en linea*****'))