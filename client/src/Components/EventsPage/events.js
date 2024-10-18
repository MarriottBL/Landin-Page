import moment from 'moment'; //for date manipulation
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; //Library to display calendar UI
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch } from 'react-redux'; //to interact with the Redux state
import CustomCalendar from './Calendar/customCalendar';
import EventModal from './EventPop/eventModal';


const localizer = momentLocalizer(moment);


const CalendarView = () => {
    const dispatch = useDispatch()
    // const { events, status, error } = useSelector((state) => state.calendar);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [events, setEvents] = useState([]); // Define events state
    const [status, setStatus] = useState('idle'); // Define status state



    const handleEventClick  = (event) => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);  // Close the modal
    };

//Fetch calendar events when the component loads or status change
useEffect(() => {
    if (status === 'idle') {
        fetchEvents(); // Call fetchEvents here
    }
}, [status]);

const fetchEvents = async () => {
    setStatus('loading'); // Set status to loading when fetching starts
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/events`);
        const data = await response.json(); // Ensure the response is JSON
        setEvents(data); // Set the fetched events to the events state
        setStatus('succeeded'); // Set status to succeeded after fetching
    } catch (error) {
        console.error("Error fetching events:", error);
        setStatus('failed'); // Set status to failed if fetching fails
    }
};

    if (status === 'loading') return <p>Loading events...</p>;
    if (status === 'failed') return <p>Error fetching events!</p>;
    
    return (
            <div>
                <div >
            <Calendar
                localizer={localizer}
                events={Array.isArray(events) && events.map(event => ({
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    description: event.description,
                    location: event.location
                }))}
                views={['month']}
                components={{ toolbar: CustomCalendar }}
                onSelectEvent={handleEventClick}
                startAccessor="start"
                endAccessor="end"
                />
                </div>
            <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={closeModal} />
        </div>
    );
};



export default CalendarView;