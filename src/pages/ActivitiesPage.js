// src/pages/ActivitiesPage.js
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../css/pages-styling/ActivitiesPage.css';

const activities = [
    { name: "Heritage Line Ylang Cruise", image: "images/cruise.jpg", description: "A luxury cruise through Ha Long Bay.", link: "https://www.example.com/cruise" },
    { name: "The Marble Mountains", image: "images/mm.jpg", description: "A cluster of marble and limestone hills in Da Nang.", link: "https://www.example.com/marble_mountains" },
    { name: "Cat Ba Island", image: "images/island.jpg", description: "A serene island with breathtaking landscapes.", link: "https://www.example.com/cat_ba_island" },
    { name: "The Old Quarter", image: "images/quarter.jpg", description: "A historic area in Hanoi, known for its bustling markets.", link: "https://www.example.com/old_quarter" }
];

function ActivitiesPage() {
    const [selectedActivity, setSelectedActivity] = useState(null);

    const openModal = (activity) => {
        setSelectedActivity(activity);
    };

    const closeModal = () => {
        setSelectedActivity(null);
    };

    return (
        <div className="activities-page">
            <section className="activities-section">
                <h2>Popular Activities</h2>
                <div className="flex-container">
                    <div className="columns">
                        <p>Vietnam offers a wide range of activities that cater to all types of travelers. Exploring the breathtaking landscapes of Ha Long Bay by boat is a must-do, where visitors can cruise among limestone karsts and emerald waters. Trekking in the terraced rice fields of Sapa allows for immersive cultural experiences with local ethnic minorities. Adventurers often visit the massive Phong Nha-Ke Bang National Park, home to some of the world’s largest caves, including Son Doong.</p>
                        <p>Urban exploration in cities like Hanoi and Ho Chi Minh City offers a mix of history and modernity, with bustling markets, street food, and French colonial architecture. Additionally, tourists enjoy learning about Vietnam's war history at the Cu Chi Tunnels or relaxing on the beaches of Da Nang and Phu Quoc Island.</p>
                        <p>Vietnam is a paradise for nature lovers and adventure seekers alike. Mui Ne offers thrilling sand dunes for sandboarding and kite surfing, while the Mekong Delta provides a peaceful experience of floating markets, lush landscapes, and river cruises. Hoi An, a UNESCO World Heritage site, invites visitors to stroll through its ancient streets, lit by colorful lanterns, and experience its rich cultural heritage through cooking classes and traditional craftsmanship. For those interested in wildlife, Cát Tiên National Park is home to diverse ecosystems and endangered species, ideal for trekking and birdwatching. Whether you’re exploring the dense jungles of Ba Be National Park or enjoying a scenic motorbike ride along the Hai Van Pass, Vietnam’s diverse landscapes and activities promise unforgettable experiences.</p>
                    </div>
                    <div className="media">
                        <img src="images/activities.jpg" alt="Activities" height="350" width="625" />
                        <iframe
                            width="625"
                            height="350"
                            src="https://www.youtube.com/embed/VllrbpyPK60?si=zNzQQckMs9ncvl5U"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="activities-gallery">
                {activities.map((activity, index) => (
                    <div key={index} className="activity-card" onClick={() => openModal(activity)}>
                        <img src={activity.image} alt={activity.name} />
                        <h3>{activity.name}</h3>
                    </div>
                ))}
            </section>

            <Modal
                show={selectedActivity !== null}
                onClose={closeModal}
                landmark={selectedActivity}
            />
        </div>
    );
}

export default ActivitiesPage;
