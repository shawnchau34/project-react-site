import React, { useState } from "react";
import "../css/DeleteItemForm.css";

const DeleteItemForm = ({ id, name, onDeleteSuccess, closeDialog }) => {
    const [status, setStatus] = useState({ success: false, error: "" });

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `https://serverside-0s0d.onrender.com/api/house_plans/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                setStatus({ success: true, error: "" });
                onDeleteSuccess();
                closeDialog();
            } else {
                const errorData = await response.json();
                setStatus({ success: false, error: errorData.message || "Failed to delete item." });
            }
        } catch (error) {
            setStatus({ success: false, error: "An error occurred while deleting the item." });
            console.error("Delete error:", error);
        }
    };

    return (
        <div className="overlay">
            <div className="delete-form-container">
                {closeDialog && (
                    <button className="close-button" onClick={closeDialog}>
                        ✖
                    </button>
                )}
                <h3>Are you sure you want to delete "{name}"?</h3>
                <div className="delete-buttons">
                    <button className="cancel-button" onClick={closeDialog}>
                        Cancel
                    </button>
                    <button className="delete-button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                {status.error && <p className="error-message">{status.error}</p>}
                {status.success && <p className="success-message">Item deleted successfully!</p>}
            </div>
        </div>
    );
};

export default DeleteItemForm;
