import React, { useEffect } from 'react';
import './about.css';

const AboutMe = () => {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                import('./mobileAb.css').then(() => {
                    console.log('Mobile CSS for About loaded');
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
                src={require("../Gallery/jennyfer.jpg")}
                alt="profile"
                className='about-img'
                />
            </div >
                    <div className='about-text'>
                <h2>Jennifer Marriott</h2>
                <h4>Baker</h4>
            <p>
            Welcome to Tropical Baking Sweets! </p>
            <p>
            I’m Jennifer, the heart and hands behind our delicious creations. After dedicating 8 years as a special education teacher, I decided to turn my passion for baking into a full-time venture, and that's how Tropical Baking Sweets was born. We specialize in crafting Puerto Rican-style cakes, New York-style cookies, flan, tembleque, arroz con dulce, cupcakes, polvorones, quesitos, guava pastelillos, limbers, and more, all with a touch of love and tradition.
            Based in Lake Stevens, WA, we’re proud to bring the sweet flavors of the Caribbean to our community. We offer delivery to surrounding areas including Everett, Marysville, Arlington, Mount Vernon, Mukilteo, Snohomish, Monroe, Granite Falls, Edmonds, Bothell, and Kirkland. We even have monthly routes to Tacoma, Seattle and Bellevue to ensure you get your treats wherever you are.
            Thank you for joining us on this journey. We can't wait to share the sweetness of Puerto Rico with you!
            </p>
        </div>
    </div>
    )
}


export default AboutMe;