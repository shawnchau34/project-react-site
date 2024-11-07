// src/pages/DiscoverPage.js
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../css/pages-styling/DiscoverPage.css';

const landmarks = [
    { name: "Ho Chi Minh City", image: "images/hcm.jpg", description: "A vibrant city with rich history.", link: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City" },
    { name: "Saigon", image: "images/saigon.jpeg", description: "The largest city in Vietnam, full of life.", link: "https://en.wikipedia.org/wiki/Saigon" },
    { name: "Hanoi", image: "images/temple.jpg", description: "The capital city, blending history and modernity.", link: "https://en.wikipedia.org/wiki/Hanoi" },
    { name: "Hạ Long Bay", image: "images/discoverbay.jpg", description: "Famous for its emerald waters and limestone islands.", link: "https://en.wikipedia.org/wiki/H%E1%BA%A1_Long_Bay" }
];

function DiscoverPage() {
    const [selectedLandmark, setSelectedLandmark] = useState(null);

    const openModal = (landmark) => {
        setSelectedLandmark(landmark);
    };

    const closeModal = () => {
        setSelectedLandmark(null);
    };

    return (
        <div className="discover-page">
            <section className="history-section">
                <h2>Vietnam's History</h2>
                <div className="flex-container">
                    <img src="images/history.jpg" alt="Vietnam history" height="350" width="350" />
                    <div className="columns">
                        <p>Vietnam's history is rich and complex, shaped by centuries of cultural influences and conflicts. The country has a long tradition of resilience, having been ruled by various dynasties and foreign powers, including China for over a thousand years. Vietnam's more recent history is marked by its struggle for independence from French colonial rule in the mid-20th century, leading to the Vietnam War, a pivotal conflict between the communist North and the U.S.-backed South. After the war ended in 1975, the country was reunified, and Vietnam has since evolved into a dynamic nation with a vibrant culture and growing economy.</p>
                    </div>
                </div>
            </section>

            <section className="landmarks-section">
                <h2>Breathtaking Landmarks</h2>
                <div className="flex-container">
                    <div className="columns">
                        <p>Vietnam boasts numerous iconic landmarks that highlight its historical and cultural significance. Ha Long Bay, known for its emerald waters and limestone karsts, stands as a UNESCO World Heritage site and a symbol of Vietnam's natural beauty. The ancient capital of Hue, with its imperial citadel, reflects the country’s royal heritage, while the My Son Sanctuary offers a glimpse into the ancient Champa civilization. Additionally, the Cu Chi Tunnels near Ho Chi Minh City tell a powerful story of Vietnam's resistance during the war, making these landmarks deeply intertwined with the nation’s history.</p>
                    </div>
                    <div className="video-container">
                        <iframe
                            width="600"
                            height="315"
                            src="https://www.youtube.com/embed/-CAnr16-NSA?si=kY4zv_PPdZUXzKf9"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="landmarks-gallery">
                {landmarks.map((landmark, index) => (
                    <div key={index} className="landmark-card" onClick={() => openModal(landmark)}>
                        <img src={landmark.image} alt={landmark.name} width="195" height="100" />
                        <h3>{landmark.name}</h3>
                    </div>
                ))}
            </section>

            <Modal
                show={selectedLandmark !== null}
                onClose={closeModal}
                landmark={selectedLandmark}
            />
        </div>
    );
}

export default DiscoverPage;
