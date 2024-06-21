const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userName: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minLength: 8
    },
});

const User = mongoose.model('tasks', userSchema);

module.exports = User;