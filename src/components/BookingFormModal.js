import React from 'react';
import BookingForm from './BookingForm';
import './BookingFormModal.css';

function BookingFormModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span> {/* Close button */}
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingFormModal;
