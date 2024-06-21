const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: String,
    Status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Blocked', 'Completed', 'Cancelled'],
    },
    startDate: Date,
    endDate: Date,
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;