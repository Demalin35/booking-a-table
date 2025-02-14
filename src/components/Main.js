import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

// Initialize available times
function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// Reducer to update available times
function updateTimes(state, action) {
  if (action.date) {

    return initializeTimes();
  }
  return state;
}

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const submitForm = (formData) => {
    console.log('Reservation Details:', formData);
    closeModal();
    navigate('/confirmation');
  };

  return (
    <div>
      {/* Remove the header section */}
      {/* Modal for booking form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </Modal>
    </div>
  );
}

export default Main;
