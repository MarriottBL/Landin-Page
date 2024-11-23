import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import './order.css';

function Order() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        // Function to trigger blink
        const triggerBlink = () => {
            setIsBlinking(true);
            
            // Remove blink class after animation
            setTimeout(() => {
                setIsBlinking(false);
            }, 1500); // Duration for 3 blinks
        };

        // Calculate initial delay to sync with 2-minute intervals
        const now = new Date();
        const secondsPastTwoMinutes = (now.getMinutes() % 2) * 60 + now.getSeconds();
        const initialDelay = (120 - secondsPastTwoMinutes) * 1000;

        // Initial trigger after calculated delay
        const initialTimer = setTimeout(() => {
            triggerBlink();
            // Start regular interval after initial delay
            const intervalId = setInterval(triggerBlink, 120000); // 2 minutes
            
            // Store interval ID for cleanup
            return () => clearInterval(intervalId);
        }, initialDelay);

        // Cleanup initial timer
        return () => clearTimeout(initialTimer);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Order">
            <Button
                variant="contained"
                color="success"
                onClick={openModal}
                className={`order-now-btn ${isBlinking ? 'blinking' : ''}`}
            >
                ORDER NOW
            </Button>

            <Dialog open={isModalOpen} onClose={closeModal}>
                <IconButton
                    aria-label="close"
                    onClick={closeModal}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent className="modal-content">
                    <p> Ready to capture your moments? Reach out to us to book your photography session. Just tap a button below to get started!</p>
                    <p>—let’s make your memories unforgettable!</p>
                </DialogContent>

                <DialogActions className="modal-actions">
                    <Button
                        component="a"
                        href=" # "
                        target="_blank"
                        color="primary"
                        rel="noopener noreferrer"
                        className="messenger-btn facebook"
                        startIcon={<FacebookIcon />}
                    >
                        Facebook Order
                    </Button>
                    <Button
                        component="a"
                        href=" # "
                        target="_blank"
                        color="primary"
                        rel="noopener noreferrer"
                        className="messenger-btn instagram"
                        startIcon={<InstagramIcon />}
                    >
                        Instagram Order
                    </Button>
                    <Button
                        component="a"
                        color="primary"
                        href=" # "
                        className="messenger-btn email"
                        startIcon={<EmailIcon />}
                    >
                        Email Order
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Order;
