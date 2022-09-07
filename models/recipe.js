const {model, Schema} = require('mongoose')

const recipeSchema = new Schema({
    name: {type: String, required: true},
    ingredients: [{type: Array, required: false}],
    duration: {type: Number, required: false},
    preparation: {type: String, required: false}
},{versionKey: false})

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe