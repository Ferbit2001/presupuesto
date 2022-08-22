const controller = require('../controllers/recipe.js');

const all = async (req, res) => {
    const data = await controller.all();
    res.json(data);
}

const get = async (req, res) => {
    const data = await controller.get(req.params.id);
    res.json(data);
}

const add = async (req, res) => {
    const data = await controller.add(req.body);
    res.json(data);
}

const put = async (req, res) => {
    const data = await controller.put(req.params.id, req.body);
    res.json(data);
}

const del = async (req, res) => {
    const data = await controller.del(req.params.id);
    res.json(data);
}

const search = async (req, res) => {
    const data = await controller.search(req.params.id);
    res.json(data);
}

module.exports = { all, get, add, put, del, search };