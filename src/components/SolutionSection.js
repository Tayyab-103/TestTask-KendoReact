import React, { useState } from "react";
import { Card, CardBody } from "@progress/kendo-react-layout";
import "./SolutionSection.scss";

const SolutionSection = () => {
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleMouseDown = (index) => {
    setDraggingIndex(index);
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  const handleMouseLeave = () => {
    setDraggingIndex(null);
  };

  const cardsData = [
    {
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "FEELING ANXIOUS ABOUT THE DENTIST?",
      description:
        "Prioritizes your care by keeping ourselves engaged through continuing education, new treatment strategies, and technologies.",
    },
    {
      image: "https://images.pexels.com/photos/4586688/pexels-photo-4586688.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "IN NEED OF AN EMERGENCY DENTIST?",
      description:
        "Dr. Khizar Cannata is here to educate you on the connection between oral health and overall wellbeing, and provides treatments that are conservative and preventative.",
    },
    {
      image: "https://images.pexels.com/photos/7475385/pexels-photo-7475385.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "WANT YOUR SMILE TO LOOK DIFFERENT?",
      description:
        "A beautiful smile can boost your confidence, so ask our dental team about Invisalign. Invisalign clear aligners are a simple, effective way to straighten your teeth, providing visible changes within just a few months!",
    },
  ];

  return (
    <div className="solution-section-container">
      <div className="intro">
        <h2>OUR SOLUTIONS</h2>
        <p>How Can We Help You?</p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="solution-cards-grid">
        {cardsData.map((card, index) => (
          <Card
            className={`solution-card ${draggingIndex === index ? "dragging" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            onMouseDown={() => handleMouseDown(index)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <CardBody className="solution-card-body">
              <h3>{card.title}</h3>
              <button className="learn-more-button">Learn More</button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
