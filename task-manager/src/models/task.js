const mongoose = require('mongoose');

// Create the schema for a new task
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

// Allow that schema to be accessed by the other files
const Task = mongoose.model('Task', taskSchema)

module.exports = Task;