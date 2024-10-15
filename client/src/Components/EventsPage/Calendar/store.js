import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';


// handles calendar events and their state, is configured with a calendar reducer
export const store = configureStore({
    reducer: {
        calendar: calendarReducer,
    },
});
