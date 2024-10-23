import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS file for improved styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function BookingForm({ closeModal, availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], dispatch }) {  // Set default times
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the reservation details
    console.log('Reservation Details:', { date, time, guests, occasion });

    // Close the modal after submission
    closeModal();

    // Redirect to the confirmation page
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date" className="form-label">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
        required
      />

      <label htmlFor="res-time" className="form-label">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="form-select"
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor="guests" className="form-label">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        className="form-input"
        required
      />

      <label htmlFor="occasion" className="form-label">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="form-select"
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" className="submit-btn" />
    </form>
  );
}

export default BookingForm;
