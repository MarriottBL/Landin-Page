import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import './modal.css';


const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen || !event) return null;

    const calendarUrl = `${process.env.REACT_APP_API_URL}${event.imageUrl}`;

        // Log the event data, including imageUrl
        // console.log("Event Data for Modal:", event);
        // console.log("Image URL: ", calendarUrl); // Log the image URL
        // console.log("EventModal URL", `${process.env.REACT_APP_API_URL}${event.imageUrl}`)

    //this handles the event popup when click and show the title, description, date, and start, end time
    return (
        <Dialog open={isOpen} onClose={onClose} classes={{ paper: 'modal-dialog' }}>
            <DialogTitle className="modal-title">{event.title}</DialogTitle>
            <DialogContent className="modal-content">
                    {calendarUrl && (
                        <img
                        src={calendarUrl}
                        alt={event.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            border: '2px solid black'
                        }}
                        />
                    )}
            </DialogContent>
            <DialogActions className="modal-actions">
                <Button onClick={onClose} color="primary" className="close-button">
                Close
                </Button>
            </DialogActions>
            </Dialog>
        );
    };
    

export default EventModal;
