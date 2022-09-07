const controller = require('./controller');

const all = async (req, res, f) => res.json(await controller.all(f));
const get = async (req, res, f) => res.json(await controller.get(req.params.id, f));
const add = async (req, res, f) => res.json(await controller.add(req.body, f));
const put = async (req, res, f) => res.json(await controller.put(req.params.id, req.body, f));
const del = async (req, res, f) => res.json(await controller.del(req.params.id, f));
const search = async (req, res, f) => res.json(await controller.search(req.params.id, f));

module.exports = { all, get, add, put, del, search };