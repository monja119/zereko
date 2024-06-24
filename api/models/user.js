const mongoose = require('mongoose');

const userChema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('User', userChema);