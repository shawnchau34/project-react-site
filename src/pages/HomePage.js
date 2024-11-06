// src/pages/HomePage.js
import React from 'react';
import Slideshow from '../components/Slideshow';
import '../css/pages-styling/HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <section className="slideshow-section">
                <Slideshow />
            </section>

            <section className="vietnam-overview">
                <div className="flex-container">
                    <div className="columns">
                        <h2>Vietnam: An Overview</h2>
                        <p>
                        Vietnam, a vibrant country in Southeast Asia, is known for its rich history, stunning landscapes,
                        and diverse culture. From the bustling streets of Hanoi to the peaceful rice terraces of Sapa,
                        Vietnam offers a blend of ancient traditions and modern development. Its history, marked by resilience 
                        and strength, spans from the ancient dynasties to French colonization and the Vietnam War. Today, 
                        Vietnam's culture thrives through its cuisine as well as its music and traditional festivals. From 
                        historical landmarks to Michelin-rated food, Vietnam is a must-see destination.
                        </p>
                    </div>
                    <img src="project-react-site/images/overview.jpg" width="350" height="270" alt="Vietnam overview" />
                </div>
            </section>

            <section className="popular-destinations">
                <div className="flex-container">
                    <img src="images/map.jpg" width="350" height="400" alt="Vietnam map" />
                    <div className="columns">
                        <h2>Popular Destinations</h2>
                        <p>
                        Vietnam is home to several popular destinations that showcase its natural beauty and cultural heritage.
                        Ha Long Bay, with its emerald waters and towering limestone islands, is a UNESCO World Heritage site 
                        and a top destination for travelers. The ancient town of Hoi An offers charming lantern-lit streets, 
                        historic architecture, and vibrant markets. Hanoi, the bustling capital, blends French colonial 
                        influences with traditional Vietnamese culture, while Ho Chi Minh City is a modern metropolis brimming 
                        with history, including the famous Cu Chi Tunnels.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
