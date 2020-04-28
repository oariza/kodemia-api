const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    lesson: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true       
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mentors', mentorSchema)
