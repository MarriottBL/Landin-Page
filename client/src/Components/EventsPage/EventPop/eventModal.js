import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import './modal.css';


const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen || !event) return null;


    //this handles the event popup when click and show the title, description, date, and start, end time
    return (
        <Dialog open={isOpen} onClose={onClose} classes={{ paper: 'modal-dialog' }} >
        <DialogTitle className="modal-title" >{event.title}</DialogTitle>
        <DialogContent className="modal-content" >
            <p>{event.description}</p>
            <p>Start: {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p>End: {new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p>Location: {event.location}</p>
        </DialogContent>
        <DialogActions className="modal-actions" >
            <Button onClick={onClose} color="primary" className="close-button" >Close</Button>
        </DialogActions>
        </Dialog>
    );
};

export default EventModal;
