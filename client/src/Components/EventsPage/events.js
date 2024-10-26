import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalendar } from './Calendar/calendarSlice';
import CustomCalendar from './Calendar/customCalendar';
import EventModal from './EventPop/eventModal'; // if EventModal is no longer needed, remove it


const EventComponent = ({ event }) => {
    return (
        <div>
            <p>{event.title}</p>  {/* Only display the title */}
        </div>
    );
};

const localizer = momentLocalizer(moment);



    const CalendarView = () => {
    const dispatch = useDispatch();
    const { events, status, error } = useSelector((state) => state.calendar);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        if (status === 'idle') {
            console.log("Dispatching fetchCalendar");
            dispatch(fetchCalendar()).then((response) => {
                console.log("Fetched Events Data:", response);
            });
        }
    }, [dispatch, status]);

    
    if (status === 'loading') return <p>Loading events...</p>;
    if (status === 'failed') return <p>{error}</p>;

    if (!events.length) {
        return <p>No events available</p>;
    }

    const mappedEvents = events.map(event => {
        console.log("Event Image URL: ", event.imageUrl); // Log the image URL
        return {
            ...event,
            start: new Date(event.start), // Convert start to Date object
            end: new Date(event.end),     // Convert end to Date object
        };
    });

    return (
        <div>
        <div>
        <Calendar
        localizer={localizer}
        events={mappedEvents}
        views={['month']}
        components={{
            event: EventComponent, // Custom event rendering
            toolbar: CustomCalendar
        }}
        onSelectEvent={event => setSelectedEvent(event)} // Trigger event on click
        startAccessor="start"
        endAccessor="end"
        />
        </div>
        {/* EventModal can be removed if not necessary */}
        {selectedEvent && (
        <EventModal
            event={selectedEvent}
            isOpen={!!selectedEvent}
            onClose={() => setSelectedEvent(null)}
            />
            
        )}
        </div>
    );
};

export default CalendarView;