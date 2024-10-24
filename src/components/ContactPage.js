import React, { useState } from 'react';
import './ContactPage.css'; // Import CSS for styling

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', formData);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email" className="form-label">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Enter your message"
          rows="5"
          required
        ></textarea>

        <input type="submit" value="Send Message" className="submit-btn" />
      </form>
    </div>
  );
}

export default ContactPage;
