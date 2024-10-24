import axios from 'axios';


    const api = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
        });

        export const getCalendar = async () => {
            try {
                const response = await api.get('/');
                console.log('Calendar Response:', response); // Log full response
                if (response.headers['content-type'] === 'application/json') {
                    console.log('Calendar JSON:', response.data); // Log data if JSON
                    return response.data;
                } else {
                    console.log('Received HTML or other:', response); // Log in case of HTML or non-JSON data
                }
            } catch (error) {
                console.error('Error fetching calendar:', error); // Log any errors
            }
        };
export const postCalendar = (data) => api.post ('/add', data)
export const putCalendar = (id, data) => api.put (`/edit/${id}`, data)
export const deleteCalendar = (id) => api.delete (`/remove/${id}`)