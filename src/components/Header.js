import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800', 
        'https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6502306/pexels-photo-6502306.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="header-container">
            <div className="header-content">
                <h1>Teeth Anatomy</h1>
                <h2>Teeth Anatomy, Types, Function & Care</h2>
                <p>Your teeth are part of your digestive system. They break down foods by crushing or cutting them before you swallow. Most humans have 32 teeth, although some have more and some have fewer. Enamel (the protective outer layer of your teeth) is the hardest substance in the human body.</p>
                <button className="learn-more-button">Get Started</button>
            </div>
            <div className="image-container">
                {images && images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className={`header-image ${index === currentImageIndex ? 'active' : ''}`} />
                ))}
            </div>
        </div>
    );
};

export default Header;
