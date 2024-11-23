import React, { useState, useEffect } from 'react';
import './faq.css';

const Questions = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    //Responsive for Screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                import('./mobileFaq.css').then(() => {
                    
                });
            }
        };
        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const faqData = [
        {
            question: "How can I book a photography session?",
            answer: "Booking a session is easy! Just message us on Instagram, Facebook, or send us an email with your preferred date and type of session.",
        },
        {
            question: "What types of photography do you specialize in?",
            answer: "We specialize in portraits, event photography, landscapes, and creative storytelling photography.",
        },
        {
            question: "What is your pricing for photography sessions?",
            answer: "Pricing varies depending on the type of session and location. Contact us for a personalized quote based on your needs.",
        },
        {
            question: "Do you offer event coverage or wedding photography?",
            answer: "Yes, we provide full event coverage, including weddings, corporate events, and private parties. Contact us to discuss your event details.",
        },
        {
            question: "Can I request specific locations for my photoshoot?",
            answer: "Absolutely! We are happy to shoot at your preferred location or suggest some great spots based on your style and vision.",
        },
        {
            question: "How long does it take to receive the final photos?",
            answer: "Delivery time depends on the type of session. Typically, edited photos are delivered within 1 to 2 weeks after the shoot.",
        },
        {
            question: "What is your cancellation or rescheduling policy?",
            answer: "Cancellations can be made up to 48 hours before the session, but the booking fee is non-refundable. Rescheduling is allowed based on availability.",
        }
    ];

    return (
        <div className='faq-container' >
            <div className='faq-img-wrapper'>
                <img
                src={require("../Gallery/FAQ.png")}
                alt="profile"
                className='faq-img'
                />
            </div >
            <div className='faq-text'>
                <h2>Frequently Asked Questions</h2>
                <div className='faq-list'>
                    {faqData.map((item, index) => (
                        <div key={index} className='faq-item'>
                            <div
                                className='faq-question'
                                onClick={() => toggleQuestion(index)}
                            >
                                {item.question}
                            </div>
                            {openQuestion === index && (
                                <div className='faq-answer'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Questions;