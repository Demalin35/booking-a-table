import React from 'react';
import './Modal.css'; // Create a CSS file for modal styling

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

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
