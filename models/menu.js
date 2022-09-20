const {model, Schema} = require('mongoose')

const menuSchema = new Schema({
    name: {type: String, required: true},
    breakfast: [{type: Array, required: false}],
    lunch: [{type: Array, required: false}],
    dinner: [{type: Array, required: false}],
    price:{type: Number, required: false}
},{versionKey: false})

const menu = model('menu', menuSchema)

module.exports = menu