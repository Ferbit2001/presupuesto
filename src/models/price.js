const {model, Schema} = require('mongoose')

const PriceSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: false},
    shop: {type: String, required: false},
    price_per_unit: {type: Number, required: false},
    unit: {type: String, required: false},
    quantity: {type: Number, required: false}
},{versionKey: false})

const Price = model('Price', PriceSchema)

module.exports = Price