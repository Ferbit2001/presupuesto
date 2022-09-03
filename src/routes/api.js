let recipe = require('./recipe')
let ingredient = require('./ingredient')
let price = require('./price')

const setApiRoutes = (app) => {
    app.use('/v1/recipe', recipe)
    app.use('/v1/ingredient', ingredient)
    app.use('/v1/price', price)
}

module.exports = setApiRoutes