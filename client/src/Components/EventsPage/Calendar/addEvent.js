// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addCalendar } from '../features/calendarSlice';

// const AddEventForm = () => {
//     const dispatch = useDispatch();
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         date: '',
//         start: '',
//         end: '',
//         location: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         dispatch(addCalendar(formData))
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required />

//             <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Event Description" required />

//             <input type="date" name="date" value={formData.date} onChange={handleChange} required />

//             <input type="time" name="start" value={formData.start} onChange={handleChange} required />

//             <input type="time" name="end" value={formData.end} onChange={handleChange} required />

//             <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />

//             <button type="submit">Add Event</button>
//         </form>
//         );
//     };

// export default AddEventForm;