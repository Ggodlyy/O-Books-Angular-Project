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

    existing.title = item.title;
    existing.author = item.author;
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


async function like(id, userId) {
    const book = await Book.findById(id);

    if (book.likes.includes(userId)) {
        throw new Error('User has already liked');
    }

    book.likes.push(userId);

    await book.save();
}

async function buy(id, userId) {
    const book = await Book.findById(id);

    if (book.boughtBookUsers.includes(userId)) {
        throw new Error('User has already purchased this book');
    }

    book.boughtBookUsers.push(userId);

    await book.save();
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById,
    like,
    buy,
};