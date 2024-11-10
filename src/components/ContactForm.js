// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [resultsMessage, setResultsMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            access_key: '4d14963e-1148-4834-a0a9-3da20bb0889e',
            ...formData
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setResultsMessage('Your message has been sent successfully!');
                setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
            } else {
                setResultsMessage('Failed to send your message. Please try again.');
            }
        } catch (error) {
            setResultsMessage('An error occurred while sending your message. Please try again later.');
        }
    };


    return (
        <div className="contact-form">
            <h5>Contact Me</h5>
            <p className="header-message">
                If you would like to leave a message of any type with recommendations for other travelers, please fill out the form below.
            </p>
            <form onSubmit={handleSubmit}>
                <div id="contact-input" className="flex-container">
                    <p>
                        <label htmlFor="first-name">First Name:</label>
                        <input
                            type="text"
                            id="first-name"
                            name="first_name"
                            required
                            placeholder="John"
                            minLength="3"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="last-name">Last Name:</label>
                        <input
                            type="text"
                            id="last-name"
                            name="last_name"
                            required
                            placeholder="Doe"
                            minLength="3"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </p>
                </div>
                <div id="contact-input" className="flex-container">
                    <p>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="user@email.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="123-456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </p>
                </div>
                <div id="contact-input" className="flex-container">
                    <p>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Please Enter Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </p>
                </div>
                <p>
                    <button id="contact-submit-button" type="submit">Submit</button>
                </p>
            </form>
            {resultsMessage && <div id="results"><p>{resultsMessage}</p></div>}
        </div>
    );
};

export default ContactForm;