import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCalendar } from '../Components/EventsPage/Calendar/calendarSlice';
import CalendarView from '../Components/EventsPage/events';
import { Alert, Snackbar } from '@mui/material';
import './admin.css';

const EventAdmin = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        start: '',
        end: '',
        image: null
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                image: file
            }));
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const data = new FormData();
        data.append('title', formData.title);
        data.append('start', formData.start);
        data.append('end', formData.end);
        data.append('image', formData.image);

        try {
            await dispatch(addCalendar(data)).unwrap();
            setOpenSnackbar(true);
            // Reset form after successful submission
            setFormData({
                title: '',
                start: '',
                end: '',
                image: null
            });
            setImagePreview(null);
            // Reset file input
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = '';
        } catch (error) {
            console.error('Failed to add event:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-form">
                <h2>Add New Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Event Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="start">Start Date:</label>
                        <input
                            type="datetime-local"
                            id="start"
                            name="start"
                            value={formData.start}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="end">End Date:</label>
                        <input
                            type="datetime-local"
                            id="end"
                            name="end"
                            value={formData.end}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Event Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            required
                        />
                        {imagePreview && (
                            <div className="image-preview">
                                <img src={imagePreview} alt="Preview" />
                            </div>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Adding Event...' : 'Add Event'}
                    </button>
                </form>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert 
                        onClose={() => setOpenSnackbar(false)} 
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        Event added successfully!
                    </Alert>
                </Snackbar>
            </div>

            <div className="calendar-container">
                <CalendarView />
            </div>
        </div>
    );
};

export default EventAdmin;