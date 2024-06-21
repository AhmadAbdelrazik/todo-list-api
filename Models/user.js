const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    password: String,
    id: Number
});

const User = mongoose.model('tasks', userSchema);

module.exports = User;