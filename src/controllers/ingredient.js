const Ingredient = require('../models/ingredient');

const all = async () => await Ingredient.find({});

const get = async (id) => await Ingredient.findById(id);

const add = async (ingredient) => await Ingredient.create(ingredient);

const put = async (id, ingredient) => await Ingredient.findByIdAndUpdate(id, ingredient);

const del = async (id) => await Ingredient.findByIdAndDelete(id);

const search = async (q) => await Ingredient.find({ name: { $regex: q, $options: 'i' } });

module.exports = { all, get, add, put, del, search };