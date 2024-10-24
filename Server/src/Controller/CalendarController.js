const Calendar = require ('../Model/calendar.js')

//GET
const getCalendar = async (req, res) => {
    console.log("Incoming request for calendar");
    const calendarEvents = await Calendar.find();
    console.log("Fetched calendar events:", calendarEvents);
    res.status(200).json(calendarEvents);
}

//POST
const postCalendar = async (req, res) => {
    const calendar = new Calendar(req.body)

    try {
        const newCalendarEvent = await calendar.save()
        res.status(200).json(newCalendarEvent)
    } catch (err) {
        res.status(500).json({  message: 'Error fetching calendar data'})
    }
}

//PUT
const putCalendar = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const updateEvent = await Calendar.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updateEvent) return res.status(404).send('User not found')
        res.send(updateEvent)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//DELETE
const deleteCalendar = async (req, res) => {
    try {
        const deleteCalendarEvent = await Calendar.findByIdAndDelete(req.params.id)
        if (!deleteCalendarEvent) return res.status(404).send('Calendar Event not found');
        res.send(deleteCalendarEvent)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCalendar,
    postCalendar,
    putCalendar,
    deleteCalendar
}