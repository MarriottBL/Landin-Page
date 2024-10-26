import axios from 'axios';


    const api = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000'
        });

export const getCalendar = () => api.get ('/calendar')
export const postCalendar = (data) => api.post ('/add', data)
export const putCalendar = (id, data) => api.put (`/edit/${id}`, data)
export const deleteCalendar = (id) => api.delete (`/remove/${id}`)