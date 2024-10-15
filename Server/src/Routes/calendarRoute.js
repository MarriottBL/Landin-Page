const express = require('express');
const router = express.Router();
const {getCalendar,postCalendar,putCalendar,deleteCalendar} = require('../Controller/CalendarController.js')



//All Routes
router.get('/', getCalendar);
router.post('/add', postCalendar);
router.put('/edit/:id', putCalendar);
router.delete('/remove/:id', deleteCalendar);

module.exports = router;