require('./db/db');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let Ingredient = require('./models/ingredient')
let Recipe = require('./models/recipe')
let Price = require('./models/price')
let Menu = require('./models/menu')

const httpHandler = require('./src/httpHandler')

let setFun = (url,fun) => {
    const router = express.Router()
    router.route('/')
	    .get((req,res)=>httpHandler.all(req,res,fun))
	    .post((req,res)=>httpHandler.add(req,res,fun))
    router.route('/:id')
	    .get((req,res)=>httpHandler.get(req,res,fun))
	    .post((req,res)=>httpHandler.search(req,res,fun))
	    .put((req,res)=>httpHandler.put(req,res,fun))
	    .delete((req,res)=>httpHandler.del(req,res,fun))
    app.use(url,router)
}

setFun('/v1/ingredient',Ingredient)
setFun('/v1/recipe',Recipe)
setFun('/v1/price',Price)
setFun('/v1/menu',Menu)

app.listen(80,"0.0.0.0",()=>console.log('*****Server en linea*****'))