// src/components/Modal.js
import React from 'react';
import '../css/Modal.css';

function Modal({ show, onClose, landmark }) {
    if (!show || !landmark) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <img src={landmark.image} alt={landmark.name} />
                <h2>{landmark.name}</h2>
                <p>{landmark.description}</p>
                <a href={landmark.link} target="_blank" rel="noopener noreferrer" className="modal-link">Learn More!</a>
            </div>
        </div>
    );
}

export default Modal;
