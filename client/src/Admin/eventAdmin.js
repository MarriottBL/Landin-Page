import React, { useState } from 'react';
import axios from 'axios';

const AdminEventForm = () => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('start', startDate);
        formData.append('end', endDate);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('http://localhost:8080/api/calendar/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            alert('Event added successfully!');
            resetForm();
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Failed to add event. Please try again.');
        }
    };

    const resetForm = () => {
        setTitle('');
        setStartDate('');
        setEndDate('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit} className="admin-form">
            <h2>Add New Event</h2>
            
            <div className="form-group">
                <label>Event Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Start Date & Time:</label>
                <input
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>End Date & Time:</label>
                <input
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Event Image:</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    required
                />
            </div>

            <button type="submit">Add Event</button>
        </form>
    );
};

export default AdminEventForm; 