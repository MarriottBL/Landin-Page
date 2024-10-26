const mongoose = require('mongoose')

const calendarSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is still required
    },
    imageUrl: {
        type: String, // This will store the file path or URL of the image
        required: true, // Make image URL required
    },
    start: {
        type: Date, // The start date of the event
        required: true, // Start date is required for calendar display
    },
    end: {
        type: Date, // The end date of the event (can be same as start for one-day events)
        required: true, // End date is required for calendar display
    },
});


module.exports = mongoose.model('Calendar', calendarSchema);