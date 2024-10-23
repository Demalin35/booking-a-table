// src/components/ConfirmationPage.js
import React from 'react';
import './ConfirmationPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

function ConfirmationPage() {
  return (
    <div className="confirmation-container">
      <h1 className="confirmation-title">Reservation Confirmed!</h1>
      <p className="confirmation-message">
        Thank you for reserving a table with Little Lemon. We look forward to serving you.
      </p>
      <Link to="/">
        <button className="return-btn">Return to Home</button> {/* Button to return to the home page */}
      </Link>
    </div>
  );
}

export default ConfirmationPage;
