import React from 'react';
import { CardBody } from '@progress/kendo-react-layout';
import './MeetSection.scss';

const MeetSection = () => {
    return (
        <div className="kendo-container">
            <div className="header-grid">
                <div className="header-content">
                    <CardBody>
                        <p className="k-card-subtitle">New Patients Welcome!</p>
                        <h2>Offering a Holistic Approach to Dental Care For a Happier, Healthier You</h2>
                        <p>Wellness starts with a healthy smile, and at Bayview Dental Centre, your well-being is our top priority. Our friendly dental team provides compassionate dental care, using technology to provide treatment for you and your family. We offer a range of dental services, including restorative, preventative, orthodontic, and pediatric dentistry, to prioritize your oral health.</p>
                        <button className="k-button">Learn More</button>
                    </CardBody>
                </div>
                <div className="header-image">
                    <img
                        src="https://images.pexels.com/photos/7653331/pexels-photo-7653331.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="bayview dental team laughing"
                        className="k-card-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default MeetSection;
