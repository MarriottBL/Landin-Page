import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import './order.css';

function Order() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Order">
            {/* Order Now Button */}
            <Button variant="contained" color="success" onClick={openModal}>
                Order Now
            </Button>

            
            <Dialog open={isModalOpen} onClose={closeModal} >
                        <IconButton
                    aria-label="close"
                    onClick={closeModal}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>

                    {/* line 41 is to add a tittle if you want to */}
                {/* <DialogTitle className="modal-title"></DialogTitle> */}

                <DialogContent className="modal-content">
                    <p>Craving something sweet? Chat with us to place your order. Just tap a button below</p>
                    <p>—we'll handle the rest!</p>
                        
                </DialogContent>

                <DialogActions className="modal-actions">
                    <Button
                    component="a"
                    href="https://m.me/100088704585145"
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
                    href="https://www.instagram.com/tropicalbakingsweets/"
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
                    href="mailto:tropicalbakingsweets@gmail.com?subject=Order%20Inquiry&body=Hello%2C%20I%27d%20like%20to%20place%20an%20order."
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
