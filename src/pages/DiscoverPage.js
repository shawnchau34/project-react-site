// src/pages/DiscoverPage.js
import React, { useEffect, useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import DeleteItemForm from '../components/DeleteItemForm';
import EditItemForm from '../components/EditItemForm';
import Modal from '../components/Modal';
import '../css/pages-styling/DiscoverPage.css';

const DiscoverPage = () => {
    const [landmarks, setLandmarks] = useState([]);
    const [selectedLandmark, setSelectedLandmark] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [landmarkToDelete, setLandmarkToDelete] = useState(null);
    const [landmarkToEdit, setLandmarkToEdit] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://serverside-0s0d.onrender.com/api/house_plans');
            const data = await response.json();
            const filteredData = data.filter(item => item.title && item.img_name && item.historical_significance);
            setLandmarks(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddSuccess = () => {
        fetchData(); // Refresh data after adding a new landmark
    };

    const handleDeleteSuccess = () => {
        fetchData(); // Refresh the data after deletion
    };

    const handleEditSuccess = (updatedLandmark) => {
        setLandmarks((prevLandmarks) =>
            prevLandmarks.map((landmark) =>
                landmark._id === updatedLandmark._id ? updatedLandmark : landmark
            )
        );
        setShowEditDialog(false); // Close the edit dialog
    };

    const openEditDialog = (landmark) => {
        setLandmarkToEdit(landmark); // Set the item to edit
        setShowEditDialog(true); // Open the edit dialog
    };

    const closeEditDialog = () => {
        setShowEditDialog(false); // Close the edit dialog
        setLandmarkToEdit(null); // Clear the item to edit
    };

    const openDeleteDialog = (landmark) => {
        setLandmarkToDelete(landmark);
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
        setLandmarkToDelete(null);
    };

    const openModal = (landmark) => setSelectedLandmark(landmark);
    const closeModal = () => setSelectedLandmark(null);

    return (
        <div className="discover-page">
            <section className="history-section">
                <h2>Vietnam's History</h2>
                <div className="flex-container">
                    <img src="images/history.jpg" alt="Vietnam history" height="350" width="350" />
                    <div className="columns">
                        <p>Vietnam's history is rich and complex...</p>
                    </div>
                </div>
            </section>

            <section className="landmarks-section">
                <h2>Breathtaking Landmarks</h2>
                <div className="flex-container">
                    <div className="columns">
                        <p>Vietnam boasts numerous iconic landmarks...</p>
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
                        <img src={landmark.img_name} alt={landmark.title} width="195" height="100" />
                        <h3>
                            <a href={landmark.link} target="_blank" rel="noopener noreferrer">
                                {landmark.title}
                            </a>
                        </h3>
                        {/* Edit Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the modal
                                openEditDialog(landmark);
                            }}
                        >
                            Edit
                        </button>
                        {/* Delete Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the modal
                                openDeleteDialog(landmark);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </section>

            {/* New Button to Toggle the Add Form */}
            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Cancel' : 'Add Landmark'}
            </button>

            {/* New Add Form */}
            {showAddForm && <AddItemForm type="landmark" onAddSuccess={handleAddSuccess} closeForm={() => setShowAddForm(false)} />}
            
            {/* Edit Form */}
            {showEditDialog && landmarkToEdit && (
                <EditItemForm
                    item={landmarkToEdit}
                    type="landmark"
                    onEditSuccess={handleEditSuccess}
                    closeDialog={closeEditDialog}
                />
            )}

            {/* Delete Dialog */}
            {showDeleteDialog && landmarkToDelete && (
                <DeleteItemForm
                    id={landmarkToDelete._id}
                    name={landmarkToDelete.title}
                    onDeleteSuccess={handleDeleteSuccess}
                    closeDialog={closeDeleteDialog}
                />
            )}

            {/* Landmark Modal */}
            <Modal show={selectedLandmark !== null} onClose={closeModal} landmark={selectedLandmark} />
        </div>
    );
};

export default DiscoverPage;
