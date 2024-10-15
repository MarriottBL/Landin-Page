const mongoose = require('mongoose')

const calendarSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            
        },
        date: {
            type: Date,
            
        },
        start: {
            type: Date,
            
        },
        end: {
            type: Date,
            
        },
        location: {
            type: String,
            
        },
        imageUrl: {
            type: String
        }
});

module.exports = mongoose.model('Calendar', calendarSchema);