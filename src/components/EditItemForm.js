import React, { useState } from "react";
import "../css/AddItemForm.css"; // Reuse the styles from AddItemForm

const EditItemForm = ({ item, type, onEditSuccess, closeDialog }) => {
    const [formData, setFormData] = useState({
        title: item.title || "",
        description: item.description || "",
        img: null,
        city: item.city || "",
        region: item.region || "",
        historical_significance: item.historical_significance || "",
        attractions: item.attractions ? item.attractions.join(", ") : "",
        ingredients: item.ingredients ? item.ingredients.join(", ") : "",
        difficulty_level: item.difficulty_level || "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img" && files) {
            setFormData((prev) => ({ ...prev, img: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
    
        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        if (formData.img) {
            data.append("img", formData.img);
        }
        if (type === "activity") {
            data.append("city", formData.city || "");
            data.append("difficulty_level", formData.difficulty_level || "");
        }
        if (type === "munchies") {
            data.append("region", formData.region || "");
            if (formData.ingredients) {
                data.append(
                    "ingredients",
                    JSON.stringify(formData.ingredients.split(",").map((ing) => ing.trim()))
                );
            }
        }
        if (type === "landmark") {
            data.append("historical_significance", formData.historical_significance || "");
            if (formData.attractions) {
                data.append(
                    "attractions",
                    JSON.stringify(formData.attractions.split(",").map((attr) => attr.trim()))
                );
            }
        }
    
        try {
            const response = await fetch(
                `https://serverside-0s0d.onrender.com/api/house_plans/${item._id}`,
                {
                    method: "PUT",
                    body: data,
                }
            );
    
            if (response.status === 200) {
                const updatedItem = await response.json();
                onEditSuccess(updatedItem);
                closeDialog();
            } else {
                const errorText = await response.text();
                setError(errorText || "Failed to edit item. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };
    
    

    return (
        <div className="overlay">
            <div className="add-item-form-container">
                {closeDialog && <button className="close-button" onClick={closeDialog}>✖</button>}
                <h3>Edit {type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Upload Image:
                        <input type="file" name="img" accept="image/*" onChange={handleChange} />
                    </label>
                    {type === "activity" && (
                        <label>
                            City:
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    {type === "munchies" && (
                        <label>
                            Region:
                            <input
                                type="text"
                                name="region"
                                value={formData.region}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    {type === "landmark" && (
                        <>
                            <label>
                                Historical Significance:
                                <textarea
                                    name="historical_significance"
                                    value={formData.historical_significance}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Attractions (comma-separated):
                                <input
                                    type="text"
                                    name="attractions"
                                    value={formData.attractions}
                                    onChange={handleChange}
                                />
                            </label>
                        </>
                    )}
                    {type === "munchies" && (
                        <label>
                            Ingredients (comma-separated):
                            <input
                                type="text"
                                name="ingredients"
                                value={formData.ingredients}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    {type === "activity" && (
                        <label>
                            Difficulty Level:
                            <input
                                type="text"
                                name="difficulty_level"
                                value={formData.difficulty_level}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    <button type="submit">Save Changes</button>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Updated successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default EditItemForm;
