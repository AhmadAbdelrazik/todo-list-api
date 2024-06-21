const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true
    },
    title: String,
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Blocked', 'Completed', 'Cancelled'],
    },
    startDate: Date,
    endDate: Date,
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;