import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './Footer.scss';

const Footer = () => {
  const quickLinks = [
    { id: 42, href: '/', text: 'Home' },
    { id: 44, href: '/', text: 'About Us' },
    { id: 46, href: '/', text: 'Our Services' },
    { id: 45, href: '/', text: 'Contact Us' },
    { id: 43, href: '/', text: 'Privacy Policy' },
  ];

  const hours = [
    { day: 'Mon', time: 'Closed' },
    { day: 'Tue', time: '11:00 am - 7:00 pm' },
    { day: 'Wed', time: '9:00 am - 5:00 pm' },
    { day: 'Thu', time: '9:00 am - 5:00 pm' },
    { day: 'Fri', time: '9:00 am - 5:00 pm' },
    { day: 'Sat', time: '9:00 am - 4:00 pm' },
    { day: 'Sun', time: 'Closed' },
  ];

  return (
    <footer id="main-footer">
      <div className="container">
        <div id="footer-widgets" className="clearfix">
          <div className="footer-widget">
            <h4 className="title">Quick Links</h4>
            <ul id="menu-quick-links" className="menu">
              {quickLinks.map(link => (
                <li key={link.id} className="menu-item">
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="title">Contact Info</h4>
            <div className="contact-info">
              <strong>Teeth Anatomy</strong><br />
              12420 No 1 Road, #110<br />
              Lorem ipsum dolor sit amet.<br /><br />
              <a className="dni1" href="tel:+16042772483">(+92) 3321423502 </a><br />
              <a href="/">tayyabhameed103@gmail.com</a><br /><br />
              <div className="aow-social-footer">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-widget">
            <h4 className="title">Our Hours</h4>
            <ul className="hours-list">
              {hours.map((hour, index) => (
                <li key={index}>
                  <span className="day">{hour.day}:</span>
                  <span className="time">{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <div className="container clearfix">
          <div id="footer-info">Teeth Anatomy, Types, Function & Care</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
