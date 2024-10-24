import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Book Your Table</h1>
      <p>Reserve your spot at Little Lemon today!</p>
      <div className="booking-form-container">
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingPage;
