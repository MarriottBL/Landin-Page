import React, {useState} from 'react';
import './faq.css';

const Questions = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "How can I place an order for my baked goods?",
            answer: "It's simple. Just message us on Facebook, Instagram, or email and let us know what type of baked sweets you want.",
        },
        {
            question: "What payment options are available?",
            answer: "We accept PayPal, Venmo, Cash App, Zelle, Android Pay, Apple Pay, Visa, Mastercard, and American Express.",
        },
        {
            question: "What are the delivery options?",
            answer: "We offer a range of delivery options, including half-point delivery, home delivery, and delivery to event venues. Each delivery option is priced differently based on distance.",
        },
        {
            question: "Is there a deposit for each order?",
            answer: "Yes, a 50% deposit is required for all orders.",
        },
        {
            question: "Can I cancel my order?",
            answer: "Yes, you can cancel your order, but you will lose your deposit, and the deposit cannot be rolled over to another order.",
        },
        {
            question: "Do you make large orders for events, birthday parties, or gatherings?",
            answer: "Yes, we are happy to accommodate large orders for events, birthday parties, and gatherings. Depending on the size of the order, we may require a deposit of more than 50%.",
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