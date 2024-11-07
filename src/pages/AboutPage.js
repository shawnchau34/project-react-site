// src/pages/AboutPage.js
import React from 'react';
import '../css/pages-styling/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-page">
            <section className="story">
                <h2>Our Story</h2>
                <div className="flex-container">
                    <p>
                        "Our story began with a shared love for Vietnam—its vibrant culture, rich history, and breathtaking landscapes. As a group of travelers, food enthusiasts, and storytellers, we came together with a mission to share the beauty of this incredible country with the world. From the bustling streets of Hanoi to the serene waters of Ha Long Bay, we’ve experienced Vietnam’s unique charm firsthand. Our passion led us to create this website, a space where we can showcase the hidden gems, local traditions, and unforgettable experiences that make Vietnam so special. Join us as we explore and celebrate the soul of Vietnam, one story at a time."
                    </p>
                </div>
            </section>

            <section id="contact" className="section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <div className="social">
                            <img src="project-react-site/images/phone.jpg" alt="Phone icon" />
                            <h4>Phone: 225-888-6022</h4>
                        </div>
                        <div className="social">
                            <img src="project-react-site/images/email.jpg" alt="Email icon" />
                            <h4>Email: DiscoverVietnam@gmail.com</h4>
                        </div>
                        <div className="social">
                            <img src="project-react-site/images/insta.webp" alt="Instagram icon" />
                            <h4>Instagram: @DiscoverVietnam</h4>
                        </div>
                        <div className="social">
                            <img src="project-react-site/images/x.avif" alt="X icon" />
                            <h4>X: @DiscoverVietnam</h4>
                        </div>
                    </div>
                    <div className="contact-img">
                        <img src="project-react-site/images/head.jpeg" alt="Contact" width={300} height={450}/>
                    </div>
                </div>

                <div className="contact-form">
                    <h5>Contact Me</h5>
                    <p className="header-message">If you would like to leave a message of any type with recommendations for other travelers, please fill out the form below.</p>
                    <form id="contact-me" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="4d14963e-1148-4834-a0a9-3da20bb0889e" />
                        
                        <div id="contact-input" className="flex-container">
                            <p>
                                <label htmlFor="first-name">First Name:</label>
                                <input type="text" id="first-name" name="first_name" required placeholder="John" minLength="3" />
                            </p>
                            <p>
                                <label htmlFor="last-name">Last Name:</label>
                                <input type="text" id="last-name" name="last_name" required placeholder="Doe" minLength="3" />
                            </p>
                        </div>
                        <div id="contact-input" className="flex-container">
                            <p>
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" id="email" name="email" required placeholder="user@email.com" />
                            </p>
                            <p>
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" name="phone" placeholder="123-456-7890" />
                            </p>
                        </div>
                        <div id="contact-input" className="flex-container">
                            <p>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" required placeholder="Please Enter Your Message"></textarea>
                            </p>
                        </div>
                        <p>
                            <button id="contact-submit-button" type="submit">Submit</button>
                        </p>
                    </form>
                    <div id="results"></div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
