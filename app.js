require('./db/db');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

require('./src/routes/api')(app)

app.listen(80,"0.0.0.0",()=>console.log('*****Server en linea*****'))