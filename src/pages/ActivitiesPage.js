// src/pages/ActivitiesPage.js
import React, { useEffect, useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import Modal from '../components/Modal';
import '../css/pages-styling/ActivitiesPage.css';

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://serverside-0s0d.onrender.com/api/house_plans');
            const data = await response.json();
            const filteredData = data.filter(item => item.title && item.img_name && item.difficulty_level && item.city);
            setActivities(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Function to handle successful addition of new activity
    const handleAddSuccess = () => {
        fetchData(); // 
    };


    const openModal = (activity) => setSelectedActivity(activity);
    const closeModal = () => setSelectedActivity(null);

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
                        <img src={activity.img_name} alt={activity.title} />
                        <h3>
                            <a href={activity.link} target="_blank" rel="noopener noreferrer">
                                {activity.title}
                            </a>
                        </h3>
                    </div>
                ))}
            </section>

            
            {/* New Button to Toggle the Add Form */}
            <button classname="add-activity-button" onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Cancel' : 'Add Activity'}
            </button>

            {/* New Add Form */}
            {showAddForm && <AddItemForm type="activity" onAddSuccess={handleAddSuccess} closeForm={()=> setShowAddForm(false)}/>}

            <Modal
                show={selectedActivity !== null}
                onClose={closeModal}
                landmark={selectedActivity}
            />
        </div>
    );
}

export default ActivitiesPage;
