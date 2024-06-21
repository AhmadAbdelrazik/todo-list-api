const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    password: {
        type: String,
        minLength: 8
    },
    id: Number
});

const User = mongoose.model('tasks', userSchema);

module.exports = User;