import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
    withCredentials: true
});

export const getCalendar = () => api.get('/api/calendar');
export const postCalendar = (data) => api.post('/api/calendar/add', data);
export const putCalendar = (id, data) => api.put(`/api/calendar/edit/${id}`, data);
export const deleteCalendar = (id) => api.delete(`/api/calendar/remove/${id}`);