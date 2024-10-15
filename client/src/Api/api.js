import axios from 'axios';


const api = axios.create (
    {
        baseURL: 'http://localhost:8000/api/calendar'
    }
)

export const getCalendar = () => api.get ('/')
export const postCalendar = (data) => api.post ('/add', data)
export const putCalendar = (id, data) => api.put (`/edit/${id}`, data)
export const deleteCalendar = (id) => api.delete (`/remove/${id}`)