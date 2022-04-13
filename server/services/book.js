const Book = require('../models/Book');


async function getAll() {
    return Book.find({});
}

async function create(item) {
    const result = new Book(item);
    await result.save();

    return result;
}

function getById(id) {
    return Book.findById(id);
}

async function update(id, item) {
    const existing = await Book.findById(id);

    existing.title = item.make;
    existing.author = item.model;
    existing.genre = item.genre;
    existing.description = item.description;
    existing.price = item.price;
    existing.img = item.img;


    await existing.save();

    return existing;
}

async function deleteById(id) {
    await Book.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
};