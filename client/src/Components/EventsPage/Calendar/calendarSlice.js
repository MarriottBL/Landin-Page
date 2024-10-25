import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCalendar, postCalendar, putCalendar } from '../../../Api/api';

//*this page defines the state management for the calendar eventss to handle asynchronous operations from the API*//
//it also contains the logic for managing calendar events using createSlice from Redux Toolkit.


//  API Requests
export const fetchCalendar = createAsyncThunk('calendar/fetchCalendar', async () => {
    return fetch('https://tbs-back-production.up.railway.app/api/calendar')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch calendar events'); // Handle non-OK responses
            }
            return response.json(); // Parse response as JSON
        })
        .then(data => {
            console.log('Calendar events from API:', data); // Log the parsed JSON data
            return data; // Return the data for Redux to handle
        })
        .catch(error => {
            console.error('Error while fetching calendar:', error);
            throw error;
        });
})

export const addCalendar = createAsyncThunk('calendar/addCalendar', async (data) => {
    const response = await postCalendar(data);
    return response.data;
});

export const updateCalendar = createAsyncThunk('calendar/updateCalendar', async ({ id, data }) => {
    const response = await putCalendar(id, data);
    return response.data;
});

export const removeCalendar = createAsyncThunk('calendar/removeCalendar', async (id) => {
    await deleteCalendar(id);
    return id;
});


// Slice
//initial state
const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [],
        status: 'idle',
        error: null,
    },
    reducers: {},


    //extraReducers is used for handling asynchronous operations in the slice
    extraReducers: (builder) => {
        // Handle fetching events
        builder
            .addCase(fetchCalendar.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCalendar.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = action.payload;
            })
            .addCase(fetchCalendar.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Handle adding new events, this reducer takes the event data and added it to the events array
            .addCase(addCalendar.fulfilled, (state, action) => {
                state.events.push(action.payload);
            })

            // Handle updating events, finds the event in the events array that matches the updated event's
            // ID and replaces it with the updated data from action.payload
            .addCase(updateCalendar.fulfilled, (state, action) => {
                const index = state.events.findIndex(event => event._id === action.payload._id);
                if (index !== -1) {
                    state.events[index] = action.payload;
                }
            })

            // Handle deleting events, the event with the matching ID from the events array, effectively removing it from the state.
            .addCase(removeCalendar.fulfilled, (state, action) => {
                state.events = state.events.filter(event => event._id !== action.payload);
            });
    },
});

export default calendarSlice.reducer;
