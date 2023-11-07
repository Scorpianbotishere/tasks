const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Replace 'User' with the actual name of your User model
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true // Trims leading and trailing whitespaces
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    startdate: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
