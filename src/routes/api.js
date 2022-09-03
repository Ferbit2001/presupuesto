let recipe = require('./recipe')
let ingredient = require('./src/routes/ingredient')
let price = require('./src/routes/price')

const setApiRoutes = (app) => {
    app.use('/v1/recipe', recipe)
    app.use('/v1/ingredient', ingredient)
    app.use('/v1/price', price)
}

module.exports = setApiRoutes