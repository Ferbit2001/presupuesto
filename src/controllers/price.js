const Price = require('./../models/price');

const all = async () => await Price.find({});

const get = async (id) => await Price.findById(id);

const add = async (price) => await Price.create(price);

const put = async (id, price) => await Price.findByIdAndUpdate(id, price);

const del = async (id) => await Price.findByIdAndDelete(id);

const search = async (q) => await Price.find({ name: { $regex: q, $options: 'i' } });

module.exports = { all, get, add, put, del, search };