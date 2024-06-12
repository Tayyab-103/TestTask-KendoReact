import React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import {cardsData} from "../utils/staticData"
import "./CardGrid.scss";

const CardGrid = () => {
  return (
    <div className="card-grid-container">
      <div className="intro-section">
        <h2>OUR SERVICES</h2>
        <p>
          Prioritizing Your Dental Health and Your Well-Being. We appreciate that each of our patients is unique and provide focused care to serve you better. We offer direct insurance billing for your convenience, as well as third-party financing to help spread the cost of treatment.
        </p>
        <button className="see-all-services-button">See All Services</button>
      </div>
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <Card className="card" key={index}>
            <CardHeader className="card-header">
              <img src={card.image} alt={card.title} className="card-image" />
            </CardHeader>
            <CardBody className="card-body">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </CardBody>
          </Card>
        ))}
        <div className="standalone-image-container">
        <img
          src="https://github.com/Tayyab-103/Smile-Avenue/assets/109760448/d5e78f65-bb67-4e8f-9dd0-118e32e65e18"
          alt="Screenshot 2024-06-07 at 11 42 13 AM"
          className="standalone-image"
        />
      </div>
      </div>
    </div>
  );
};

export default CardGrid;
