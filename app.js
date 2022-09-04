require('./db/db');
const express = require('express')
const cors = require('cors')
const app = express()

// set api routes

require('./src/routes/api')(app)

app.use(cors())
app.use(express.json())

app.listen(80,"0.0.0.0",()=>console.log('*****Server en linea*****'))