import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Lemon Street, Chicago, IL</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@littlelemon.com</p>
        </div>
        
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday: 12:00 PM - 11:00 PM</p>
          <p>Sunday: 12:00 PM - 9:00 PM</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
