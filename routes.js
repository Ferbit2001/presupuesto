const express = require('express')
const router = express.Router()

router.route('/ingredientes')
    .get((req,res)=>{ res.render('index',{name:'ingredientes'}) })
router.route('/recetas')
    .get((req,res)=>{ res.render('index',{name:'recetas'}) })
router.route('/precios')
    .get((req,res)=>{ res.render('index',{name:'precios'}) })

module.exports = router