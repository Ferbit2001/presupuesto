const {model, Schema} = require('mongoose')

const ingredientSchema = new Schema({
    name: {type: String, required: true},
    carbs: {type: Number, required: false},
    protein: {type: Number, required: false},
    fat: {type: Number, required: false},
    calories: {type: Number, required: false},
    category: {type: String, required: false},
    grams_per_unit: {type: Number, required: false}
},{versionKey: false})

const Ingredient = model('Ingredient', ingredientSchema)

module.exports = Ingredient