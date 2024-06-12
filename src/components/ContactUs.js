/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactUs.scss";
import MyForm from "./Form";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="location-info">
        <h1>Our Office Location</h1>
        <p>
          Conveniently Located in Steveston, Richmond
          <br />
          Bayview Dental is located at 12420 No 1 Rd #110, Richmond, BC V7E 6N2
          in the heart of historic quaint Steveston Village. Street level and
          wheelchair accessible with ample free three-hour parking along No. 1,
          Moncton Road, and along the waterfront. Conveniently located next to
          Pharmasave. We are open to ALL dental care procedures and emergency
          needs. New patients and walk-ins welcome.
        </p>
      </div>
      <div className="content-row">
        <MyForm />
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.696696597585!2d-123.18309808431608!3d49.12502797931727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860b902a90e1df%3A0x5108f881af1f19f0!2s12420%20No.%201%20Rd%20%23110%2C%20Richmond%2C%20BC%20V7E%206N2%2C%20Canada!5e0!3m2!1sen!2s!4v1717867503181!5m2!1sen!2s"
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
