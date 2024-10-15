import React from 'react';
import './calendar.css';

//this is for only displaying the back and forward buttons in the calendar and there functionality
const CustomToolbar = (toolbar) => {
    const goToBack = () => {
        toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
        toolbar.onNavigate('NEXT');
    };


    return (
        <div className="rbc-toolbar">
        <button onClick={goToBack}>Back</button>
        <span>{toolbar.label}</span>
        <button onClick={goToNext}>Next</button>
        </div>
    );
};

export default CustomToolbar;
