import React, { useState, useEffect } from "react";
import About from '../../About/about';
import Events from '../../EventsPage/events';
import Products from '../../Products/products';
import Tabs from '../Tabs/tabs';
import Order from '../../orderNow/order'
import FAQ from '../../FAQ/faq';
import "./profileHeader.css";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('products')

    //Responsive Screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                import('./mobileMain.css').then(() => {
                    
                });
            }
        };
        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="header-container">
            <div className="header-background">
                <div className="top-right-section">
                    <div className="social-media-icons">
                        <a  href=" # " target="_blank" rel="noopener noreferrer">
                        <img src={require("../../Gallery/imgbin_instagram-png.png")} alt="Instagram Icon" className="fa-instagram" />
                            </a>
                            <a href=" # " target="_blank" rel="noopener noreferrer">
                            <img src={require("../../Gallery/Facebook_logo_(square).png")} alt="Instagram Icon" className="fa-facebook" />
                        </a>
                </div>
                <a href=" # " target="_blank" rel="noopener noreferrer" className="registration-link">
        <img src={require("../../Gallery/pngkit_white-oval-png_885453.png")} alt="Register Icon" className="register-icon" />
        </a>
            <Order />
            </div>
        </div>
        <div className="overlapping-box">
            <div className="profile-image-wrapper">
            <img
            src={require("../../Gallery/Screenshot_20230413_211521_Instagram.jpg")}
            alt="profile"
            className="profile-image"
            />
        </div >
        <div className="profile-content">
        <h2>Brandon Marriott</h2>
        
        {/* This block of code will have the about not render the following: <p> tag*/}
            <h4>Photographer</h4>
                        <div>
                            <a href=" # " target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href=" # " target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    {activeTab !== "about" && activeTab !== "faq" && (
                        <p>
                        From capturing awe-inspiring landscapes to documenting life's precious moments, I turn memories into timeless art. Whether you need a professional portrait, event coverage, or creative storytelling, let’s create something extraordinary together.
                        </p>
                    )}
                    <div className="products-section">
                        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                        <div>
                            <div className={`tab-content ${activeTab === "products" ? 'active' : ''}`}>
                                <Products />
                            </div>
                            <div className={`tab-content ${activeTab === "events" ? 'active' : ''}`}>
                                <Events />
                            </div>
                            <div className={`tab-content ${activeTab === "about" ? 'active' : ''}`}>
                                <About />
                            </div>
                            <div className={`tab-content ${activeTab === "faq" ? 'active' : ''}`}>
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ProfilePage;