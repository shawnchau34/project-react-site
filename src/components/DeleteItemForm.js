import React, { useState } from "react";
import "../css/DeleteItemForm.css";

const DeleteItem = ({ id, name, onDeleteSuccess, closeDialog }) => {
    const [result, setResult] = useState("");

    const handleDelete = async () => {
        console.log("Sending delete request for ID:", id); // Log the ID being sent
        try {
            const response = await fetch(`https://serverside-0s0d.onrender.com/api/house_plans/${id}`, {
                method: "DELETE",
            });
    
            if (response.status === 200) {
                console.log("Delete successful");
                setResult("Item deleted successfully!");
                onDeleteSuccess(); // Callback to refresh the data list
                closeDialog(); // Close the dialog
            } else {
                const errorMessage = await response.text(); // Get server error message
                console.error("Delete failed:", errorMessage);
                setResult("Failed to delete the item. Please try again.");
            }
        } catch (error) {
            console.error("Delete error:", error);
            setResult("An error occurred while deleting the item.");
        }
    };
    

    return (
        <div id="delete-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={closeDialog}
                    >
                        &times;
                    </span>
                    <h3>Are you sure you want to delete "{name}"?</h3>
                    <div>
                        <button onClick={closeDialog}>Cancel</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                    {result && <p>{result}</p>}
                </div>
            </div>
        </div>
    );
};

export default DeleteItem;
