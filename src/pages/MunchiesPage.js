// src/pages/MunchiesPage.js
import React, { useEffect, useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import DeleteItemForm from '../components/DeleteItemForm';
import EditItemForm from '../components/EditItemForm';
import Modal from '../components/Modal';
import '../css/pages-styling/MunchiesPage.css';

const MunchiesPage = () => {
    const [munchies, setMunchies] = useState([]);
    const [selectedMunchie, setSelectedMunchie] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [munchieToDelete, setMunchieToDelete] = useState(null);
    const [munchieToEdit, setMunchieToEdit] = useState(null);
    const [showEditDialog, setShowEditDialog] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://serverside-0s0d.onrender.com/api/house_plans');
            const data = await response.json();
            // Filter data specific to food/munchies (adjust criteria as needed)
            const filteredData = data.filter(item => item.title && item.img_name && (item.ingredients || []).length > 0 && item.region);
            setMunchies(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddSuccess = () => {
        fetchData(); // Refresh data after adding a new item
    };

    const handleDeleteSuccess = () => {
        fetchData(); // Refresh the data after deletion
    };

    const handleEditSuccess = (updatedMunchie) => {
        setMunchies((prevMunchies) =>
            prevMunchies.map((munchie) =>
                munchie._id === updatedMunchie._id ? updatedMunchie : munchie
            )
        );
        setShowEditDialog(false); // Close the edit dialog
    };

    const openEditDialog = (munchie) => {
        setMunchieToEdit(munchie); // Set the item to edit
        setShowEditDialog(true); // Open the edit dialog
    };

    const closeEditDialog = () => {
        setShowEditDialog(false); // Close the edit dialog
        setMunchieToEdit(null); // Clear the item to edit
    };

    const openDeleteDialog = (activity) => {
        setMunchieToDelete(activity);
        setShowDeleteDialog(true);
    };
    
    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
        setMunchieToDelete(null);
    };
    const openModal = (dish) => setSelectedMunchie(dish);
    const closeModal = () => setSelectedMunchie(null);

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
                {munchies.map((munchie, index) => (
                    <div key={index} className="food-card" onClick={() => openModal(munchie)}>
                        <img src={munchie.img_name} alt={munchie.title} />
                        <h3>
                            <a href={munchie.link} target="_blank" rel="noopener noreferrer">
                                {munchie.title}
                            </a>
                        </h3>
            {/* Edit Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the modal
                    openEditDialog(munchie);
                }}
            >
                Edit
            </button>
            {/* Delete Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the modal
                    openDeleteDialog(munchie);
                }}
            >
                Delete
            </button>
                    </div>
                ))}
            </section>

            {/* New Button to Toggle the Add Form */}
            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Cancel' : 'Add Food Item'}
            </button>

            {/* New Add Form */}
            {showAddForm && <AddItemForm type="food" onAddSuccess={handleAddSuccess} closeForm={()=> setShowAddForm(false)}/>}
            <Modal
                show={selectedMunchie !== null}
                onClose={closeModal}
                landmark={selectedMunchie}
            />

            {showEditDialog && munchieToEdit && (
                <EditItemForm
                    item={munchieToEdit}
                    type="munchies"
                    onEditSuccess={handleEditSuccess}
                    closeDialog={closeEditDialog}
                />
            )}
            
            {showDeleteDialog && munchieToDelete && (
                <DeleteItemForm
                    id={munchieToDelete._id}
                    name={munchieToDelete.title}
                    onDeleteSuccess={handleDeleteSuccess}
                    closeDialog={closeDeleteDialog}
                />
            )}

            <Modal
                show={selectedMunchie !== null}
                onClose={closeModal}
                landmark={selectedMunchie}
            />
        </div>
    );
}

export default MunchiesPage;
