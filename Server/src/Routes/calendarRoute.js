const express = require('express');
const router = express.Router();
const { getCalendar, postCalendar, putCalendar, deleteCalendar } = require('../Controller/CalendarController.js');
const upload = require('../Middleware/imgmiddleware.js'); // Import the image middleware

// All Routes
router.get('/', getCalendar);
router.post('/add', upload, postCalendar); // Apply the upload middleware for adding events with images
router.put('/edit/:id', upload, putCalendar); // Apply the upload middleware for updating events with images
router.delete('/remove/:id', deleteCalendar); // Deleting events doesn't need the upload middleware

module.exports = router;
