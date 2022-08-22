require('./db/db');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', express.static(__dirname+'/public'))
app.use('/v1/recipe', require('./routes/recipe'))
app.use('/v1/ingredient', require('./routes/ingredient'))
app.use('/v1/price', require('./routes/price'))

app.listen(3000,"0.0.0.0",()=>console.log('*****Server en puerto 3000*****'))