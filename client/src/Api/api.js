import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
    withCredentials: true
});

// Mock data for calendar
const mockCalendarData = [
    { id: 1, title: 'Event 1', start: '2023-11-01', end: '2023-11-02' },
    { id: 2, title: 'Event 2', start: '2023-11-05', end: '2023-11-06' },
];

// Mock functions to simulate API calls
export const getCalendar = () => {
    // return api.get('/api/calendar');
    // Use mock data for front-end only display
    return Promise.resolve({ data: mockCalendarData });
};

export const postCalendar = (data) => {
    // return api.post('/api/calendar/add', data);
    // Simulate adding data
    return Promise.resolve({ data });
};

export const putCalendar = (id, data) => {
    // return api.put(`/api/calendar/edit/${id}`, data);
    // Simulate updating data
    return Promise.resolve({ data: { ...data, id } });
};

export const deleteCalendar = (id) => {
    // return api.delete(`/api/calendar/remove/${id}`);
    // Simulate deleting data
    return Promise.resolve({ data: id });
};