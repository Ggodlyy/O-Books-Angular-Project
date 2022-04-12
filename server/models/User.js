const { model, Schema, Types: { ObjectId } } = require('mongoose');

const emailPattern = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
    email: { type: String, required: true, validate: {
        validator(value) {
            return emailPattern.test(value);
        },
        message: 'Must have valid email'
    } },
    hashedPassword: { type: String, minlength: [3, 'password must be at least 3 charaters long'] },
    myBooks: { type: [ObjectId], ref: 'Book', default: [] }
});


userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;