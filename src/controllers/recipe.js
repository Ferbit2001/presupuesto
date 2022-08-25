const Recipe = require('./../models/recipe');

const all = async () => await Recipe.find({});

const get = async (id) => (id != "favicon.ico") ? await Recipe.findById(id): null;

const add = async (recipe) => await Recipe.create(recipe);

const put = async (id, recipe) => await Recipe.findByIdAndUpdate(id, recipe);

const del = async (id) => await Recipe.findByIdAndDelete(id);

const search = async (q) => await Recipe.find({ name: { $regex: q, $options: 'i' } });

module.exports = { all, get, add, put, del, search };