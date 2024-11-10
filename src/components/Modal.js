import React from 'react';
import '../css/Modal.css';

function Modal({ show, onClose, landmark }) {
    if (!show || !landmark) return null;

    const { img_name, image, title, name, description, link, city, difficulty_level, historical_significance, attractions, ingredients, region } = landmark;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <img src={img_name || image} alt={title || name} />
                <h2>{title || name}</h2>
                <p>{description}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="modal-link">
                        Learn More!
                    </a>
                )}
                {city && <p><strong>City:</strong> {city}</p>}
                {difficulty_level && <p><strong>Difficulty:</strong> {difficulty_level}</p>}
                {historical_significance && (
                    <p><strong>Historical Significance:</strong> {historical_significance}</p>
                )}
                {attractions && attractions.length > 0 && (
                    <p><strong>Attractions:</strong> {attractions.join(', ')}</p>
                )}
                {ingredients && ingredients.length > 0 && (
                    <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
                )}
                {region && <p><strong>Region:</strong> {region}</p>}
            </div>
        </div>
    );
}

export default Modal;
