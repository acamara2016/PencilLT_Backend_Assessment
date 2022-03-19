const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    level1: [{
        type: String,
        required: true
    }],
    level2: [{
        type: String,
        required: true
    }],
    questions: [{
        type: Number,
        required: true
    }]
})

module.exports = mongoose.model('questions', questionSchema);