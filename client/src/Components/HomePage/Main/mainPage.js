import React, { useState } from "react";
import About from '../../About/about';
import Events from '../../EventsPage/events';
import Products from '../../Products/products';
import Tabs from '../Tabs/tabs';
import Order from '../../orderNow/order'
import FAQ from '../../FAQ/faq';
import "./profileHeader.css";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('products')

    return (
        <div className="header-container">
            <div className="header-background">
                <div className="top-right-section">
                    <div className="social-media-icons">
                        <a  href="https://www.instagram.com/tropicalbakingsweets" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../Gallery/imgbin_instagram-png.png")} alt="Instagram Icon" className="fa-instagram" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100088704585145" target="_blank" rel="noopener noreferrer">
                            <img src={require("../../Gallery/Facebook_logo_(square).png")} alt="Instagram Icon" className="fa-facebook" />
                        </a>
                </div>
                <a href="https://mailchi.mp/5ad9c3ad994a/tropical-baking-sweets" target="_blank" rel="noopener noreferrer" className="registration-link">
        <img src={require("../../Gallery/pngkit_white-oval-png_885453.png")} alt="Register Icon" className="register-icon" />
        </a>
            <Order />
            </div>
        </div>
        <div className="overlapping-box">
            <div className="profile-image-wrapper">
            <img
            src={require("../../Gallery/logo.jpg")}
            alt="profile"
            className="profile-image"
            />
        </div >
        <div className="profile-content">
        <h2>Tropical Baking Sweets</h2>
        
        {/* This block of code will have the about not render the following: <p> tag*/}
            <h4>BAKERY SHOP</h4>
                        <div>
                            <a href="https://www.instagram.com/tropicalbakingsweets" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100088704585145" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    {activeTab !== "about" && activeTab !== "faq" && (
                        <p>
                            Discover a taste of Puerto Rico in Washington! We specialize in authentic Puerto Rican pastries
                            like tembleque and arroz con dulce, alongside a wide selection of cakes, cupcakes, chocolate-covered strawberries,
                            and other delectable treats. Whether you're craving traditional favorites or something sweet and classic, we've got you covered.
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