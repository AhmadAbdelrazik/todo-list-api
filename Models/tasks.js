const mongoose = require('mongoose');
const defStart = new Date();
const defEnd = new Date(defStart + (1000 * 60 * 60));

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
    startDate: {
        type: String,
        default: defStart.toUTCString()
    },
    endDate: {
        type: String,
        default: defEnd.toUTCString()
    }
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;