import moment from 'moment'; //for date manipulation
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; //Library to display calendar UI
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux'; //to interact with the Redux state
import { fetchCalendar } from './Calendar/calendarSlice'; //to interact with the Redux state
import CustomCalendar from './Calendar/customCalendar';
import EventModal from './EventPop/eventModal';


const localizer = momentLocalizer(moment);


const CalendarView = () => {
    const dispatch = useDispatch()
    const { events, status, error } = useSelector((state) => state.calendar);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Event click handler
    const handleEventClick = (event) => {
    setSelectedEvent(event);
};

     // Close modal handler
    const closeModal = () => {
        setSelectedEvent(null); // Close the modal
    };

//Fetch calendar events when the component loads or status change
    useEffect(() => {
    if (status === 'idle') {
        console.log("Dispatching fetchCalendar");
        dispatch(fetchCalendar());
    }
}, [dispatch, status]);;

    if (status === 'loading') return <p>Loading events...</p>;
    if (status === 'failed') return <p>{error}</p>;

    if (!events.length) {
        return <p>No events available</p>;
    }

// Log the mapped events to see how they are being prepared for the Calendar component
        const mappedEvents = events.map(event => ({
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
        description: event.description,
        location: event.location,
    }));
    console.log("Mapped Calendar Events:", mappedEvents); // Log the mapped calendar events


    return (
            <div>
                <div >
                    
                <Calendar
                localizer={localizer}
                events={mappedEvents} // Use mappedEvents here
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