import React from "react";
import './tabs.css';

// Import your images from the gallery
import productsIcon from '../../Gallery/mixer.png';
import eventsIcon from '../../Gallery/calendar.png';
import aboutIcon from '../../Gallery/abot.png';
import faqIcon from '../../Gallery/pngwing.com.png';

const ProfileTabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { name: "Products", icon: productsIcon },
        { name: "Events", icon: eventsIcon },
        { name: "About", icon: aboutIcon },
        { name: "FAQ", icon: faqIcon }
    ];

    return (
        <div className="tabs-container">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    onClick={() => setActiveTab(tab.name.toLowerCase())}
                    className={`tab ${activeTab === tab.name.toLowerCase() ? 'tab-active' : 'tab-inactive'}`}
                >
                    {/* Display the icon */}
                    <img src={tab.icon} alt={`${tab.name} Icon`} className="tab-icon" />
                    {/* Display the Name below icon */}
                    <span className="tab-label">{tab.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ProfileTabs;