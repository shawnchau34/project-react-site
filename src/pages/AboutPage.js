// src/pages/AboutPage.js
import React from 'react';
import ContactForm from '../components/ContactForm';
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
                            <img src="images/phone.jpg" alt="Phone icon" />
                            <h4>Phone: 225-888-6022</h4>
                        </div>
                        <div className="social">
                            <img src="images/email.jpg" alt="Email icon" />
                            <h4>Email: DiscoverVietnam@gmail.com</h4>
                        </div>
                        <div className="social">
                            <img src="images/insta.webp" alt="Instagram icon" />
                            <h4>Instagram: @DiscoverVietnam</h4>
                        </div>
                        <div className="social">
                            <img src="images/x.avif" alt="X icon" />
                            <h4>X: @DiscoverVietnam</h4>
                        </div>
                    </div>
                    <div className="contact-img">
                        <img src="images/head.jpeg" alt="Contact" width={300} height={450}/>
                    </div>
                </div>

                <ContactForm/>
            </section>
        </div>
    );
}

export default AboutPage;
