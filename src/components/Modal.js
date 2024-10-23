// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Create a CSS file for modal styling

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // If the modal is not open, return null (do not render anything)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        {children} {/* This will render the content passed to the modal (the form) */}
      </div>
    </div>
  );
}

export default Modal;
