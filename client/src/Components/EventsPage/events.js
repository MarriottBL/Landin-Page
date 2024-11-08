import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalendar } from './Calendar/calendarSlice';
import CustomCalendar from './Calendar/customCalendar';
import EventModal from './EventPop/eventModal';

const EventComponent = ({ event }) => (
    <div className="calendar-event">
        <p>{event.title}</p>
    </div>
);

const localizer = momentLocalizer(moment);

const CalendarView = () => {
    const dispatch = useDispatch();
    const { events, status, error } = useSelector((state) => state.calendar);
    const [selectedEvent, setSelectedEvent] = useState(null);

    //To handle responsive screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                import('./Calendar/mobileCa.css').then(() => {
                    
                });
            }
        };
        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fetch events when component mounts
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCalendar())
        }
    }, [dispatch, status]);

    // Loading, Error, or No Events display logic
    if (status === 'loading') return <p>Loading events...</p>;
    if (status === 'failed') return <p>{error}</p>;
    if (!events.length) return <p>No events available</p>;

    // Map events to ensure Date objects for start and end times
    const mappedEvents = events.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
    }));

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={mappedEvents}
                views={['month']}
                components={{
                    event: EventComponent,
                    toolbar: CustomCalendar,
                }}
                onSelectEvent={event => setSelectedEvent(event)} // Open modal on event click
                startAccessor="start"
                endAccessor="end"
            />
            {/* Modal to show event details */}
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
