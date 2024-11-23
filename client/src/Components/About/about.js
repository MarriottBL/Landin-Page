import React, { useEffect } from 'react';
import './about.css';

const AboutMe = () => {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                import('./mobileAb.css').then(() => {
                    
                });
            }
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='about-container' >
            <div className='about-img-wrapper'>
                <img
                src={require("../Gallery/Screenshot_20230413_211521_Instagram.jpg")}
                alt="profile"
                className='about-img'
                />
            </div >
                    <div className='about-text'>
                <h2>Brandon Marriott</h2>
                <h4>Developer</h4>
            <p>
            Welcome to Tropical Baking Sweets! </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, nisi at tincidunt fermentum, lorem elit euismod nisi, et accumsan purus velit eu sapien.
            </p>
        </div>
    </div>
    )
}


export default AboutMe;