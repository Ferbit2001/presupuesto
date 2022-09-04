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

app.use('/', express.static(__dirname+'/public/'))
app.use('css/:id', (req,res)=> res.sendFile(__dirname+'/public/css/'+req.params.id))
app.use('img/:id', (req,res)=> res.sendFile(__dirname+'/public/img/'+req.params.id))
app.use('js/:id', (req,res)=> res.sendFile(__dirname+'/public/js/'+req.params.id))

// setting public routes

app.get('/ingredientes/',(req,res)=>{ res.render('ingredient',{name:'ingredientes',event:'ingredient'}) })
app.get('/recetas/',(req,res)=>{ res.render('recipe',{name:'recetas',event:'recipe'}) })
app.get('/precios/',(req,res)=>{ res.render('price',{name:'precios',event:'price'}) })

app.listen(80,"0.0.0.0",()=>console.log('*****Server en linea*****'))