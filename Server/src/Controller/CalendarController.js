const Calendar = require('../Model/calendar.js');


// GET
const getCalendar = async (req, res) => {
    console.log("GET /api/calendar called")
    try {
        const calendarEvents = await Calendar.find();
        console.log("Fetched Calendar Events:", calendarEvents);
        res.json(calendarEvents);
    } catch (err) {
        console.error("Error fetching calendar events:", err.message);
        res.status(500).json({ message: err.message });
    }
};

// POST (with image upload, start, and end)
const postCalendar = async (req, res) => {
    console.log("POST /api/calendar/add called");
    console.log("Data received:", req.body);
    try {
        if (!req.file) {
            console.warn("File upload failed: no file received");
            return res.status(400).json({ message: "File upload failed" });
        }

        const calendar = new Calendar({
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
            imageUrl: `/uploads/calendar/${req.file.filename}`
        });

        const newCalendarEvent = await calendar.save();
        console.log("New Calendar Event saved:", newCalendarEvent);
        res.status(201).json(newCalendarEvent);
    } catch (err) {
        console.error("Error saving calendar event:", err.message);
        res.status(400).json({ message: err.message });
    }
};


// PUT
const putCalendar = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const updateEvent = await Calendar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateEvent) return res.status(404).send('Event not found');
        res.send(updateEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// DELETE
const deleteCalendar = async (req, res) => {
    try {
        const deleteCalendarEvent = await Calendar.findByIdAndDelete(req.params.id);
        if (!deleteCalendarEvent) return res.status(404).send('Calendar Event not found');
        res.send(deleteCalendarEvent);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getCalendar,
    postCalendar,
    putCalendar,
    deleteCalendar
};
