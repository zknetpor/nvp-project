import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <h1>Welcome to Our Project!</h1>
            <p>Your journey starts here.</p>
            <button className="cta-button">Get Started</button>
        </div>
    );
};

export default HeroBanner;