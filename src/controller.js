const all = async (f) => await f.find({});
const get = async (id, f) => (id != "favicon.ico") ? await f.findById(id): null;
const add = async (e, f) => await f.create(e);
const put = async (id, e, f) => await f.findByIdAndUpdate(id, e);
const del = async (id, f) => await f.findByIdAndDelete(id);
const search = async (q, f) => await f.find({ name: { $regex: q, $options: 'i' } });
module.exports = { all, get, add, put, del, search };