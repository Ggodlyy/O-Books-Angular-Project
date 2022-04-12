const { model, Schema, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    author: { type: String, required: true },
    genre: {type: String, required: true},
    img: { type: String, required: true },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    price: { type: Number, required: true },
    owner: { type: ObjectId, ref: 'User' },
    likes: { type: [ObjectId], ref: 'User' },
});

const Item = model('Item', schema);

module.exports = Item;