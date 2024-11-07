// src/pages/MunchiesPage.js
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../css/pages-styling/MunchiesPage.css';

const munchies = [
    { name: "Bánh mì", image: "images/banhmi.jpg", description: "A popular Vietnamese sandwich.", link: "https://en.wikipedia.org/wiki/Bánh_mì" },
    { name: "Phở", image: "images/pho.jpg", description: "A fragrant noodle soup.", link: "https://en.wikipedia.org/wiki/Phở" },
    { name: "Bún bò Huế", image: "images/bbh.jpg", description: "A spicy beef noodle soup.", link: "https://en.wikipedia.org/wiki/Bún_bò_Huế" },
    { name: "Bún thịt nướng", image: "giimages/btn.jpg", description: "Grilled pork with vermicelli.", link: "https://en.wikipedia.org/wiki/Bún_thịt_nướng" }
];

function MunchiesPage() {
    const [selectedDish, setSelectedDish] = useState(null);

    const openModal = (dish) => {
        setSelectedDish(dish);
    };

    const closeModal = () => {
        setSelectedDish(null);
    };

    return (
        <div className="munchies-page">
            <section className="cuisine-section">
                <h2>Vietnamese Cuisine</h2>
                <div className="flex-container">
                    <div className="columns">
                        <p>Vietnamese cuisine is known for its balance of flavors—salty, sweet, sour, and spicy—often achieved through the use of fresh herbs, spices, and ingredients like fish sauce, lime, and chili. Popular dishes include pho (a fragrant noodle soup), banh mi (a French-influenced baguette sandwich), and goi cuon (fresh spring rolls). The food is generally light and healthy, with an emphasis on fresh vegetables, rice, and seafood. Regional variations exist, with northern dishes being more subtle, central cuisine spicier, and southern cuisine sweeter.</p>
                    </div>
                    <img src="images/cuisine1.webp" alt="Vietnamese Cuisine" width="400" height="250" />
                </div>
            </section>

            <section className="appraisal-section">
                <h2>High Appraisal</h2>
                <div className="flex-container">
                    <iframe
                        width="400"
                        height="300"
                        src="https://www.youtube.com/embed/NMrgQ_dOyhk?si=OSWAO-bJsZq4DtKj"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <div className="columns">
                        <p>Vietnamese cuisine has gained global recognition for its depth of flavor and use of fresh, high-quality ingredients. Critics and chefs alike have praised its ability to balance complex flavors with simplicity. Anthony Bourdain was a notable advocate, famously highlighting Vietnam’s street food, especially bun cha in Hanoi, which he shared with then-President Obama in 2016. He called Vietnam one of his favorite food destinations, praising its vibrant street food culture.</p>
                        <p>In 2023, Michelin Guide recognized Vietnamese cuisine’s excellence, awarding stars to several restaurants in Hanoi and Ho Chi Minh City. Notable establishments include Anan Saigon, praised for its creative fusion of traditional Vietnamese ingredients with modern culinary techniques, and Gia, which focuses on refined interpretations of local flavors. Critics have lauded these restaurants for showcasing the depth of Vietnamese cuisine while maintaining respect for its roots, cementing the country’s place on the world’s culinary stage.</p>
                    </div>
                </div>
            </section>

            <section className="food-gallery">
                {munchies.map((dish, index) => (
                    <div key={index} className="food-card" onClick={() => openModal(dish)}>
                        <img src={dish.image} alt={dish.name} width="225" height="100" />
                        <h3>{dish.name}</h3>
                    </div>
                ))}
            </section>

            <Modal
                show={selectedDish !== null}
                onClose={closeModal}
                landmark={selectedDish}
            />
        </div>
    );
}

export default MunchiesPage;
