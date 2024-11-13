import React, { useState } from 'react';
import '../css/AddItemForm.css';

const AddItemForm = ({ type, onAddSuccess, closeForm }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        img: null,
        ...(type === 'activity' && { city: '' }),
        ...(type === 'munchies' && { region: '' }),
        ...(type === 'landmark' && { historical_significance: '', attractions: '' }),
        ...(type === 'food' && { ingredients: '' }),
        ...(type === 'activity' && { difficulty_level: '' })
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'img') {
            setFormData({ ...formData, img: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        if (formData.img) {
            data.append('img', formData.img); // Match multer's field name
        }

        // Add conditional fields based on type
        if (type === 'activity' && formData.city) {
            data.append('city', formData.city);
        }
        if (type === 'munchies' && formData.region) {
            data.append('region', formData.region);
        }
        if (type === 'landmark') {
            if (formData.historical_significance) {
                data.append('historical_significance', formData.historical_significance);
            }
            if (formData.attractions) {
                const attractionsArray = formData.attractions.split(',').map(item => item.trim());
                data.append('attractions', JSON.stringify(attractionsArray));
            }
        }
        if (type === 'food' && formData.ingredients) {
            const ingredientsArray = formData.ingredients.split(',').map(item => item.trim());
            data.append('ingredients', JSON.stringify(ingredientsArray));
        }
        if (type === 'activity' && formData.difficulty_level) {
            data.append('difficulty_level', formData.difficulty_level);
        }

        try {
            const response = await fetch("https://serverside-0s0d.onrender.com/api/house_plans", {
                method: 'POST',
                body: data,
            });

            if (response.status === 200 || response.status === 201) {
                setSuccess(true);
                const responseData = await response.json();
                console.log('Response data:', responseData);
                onAddSuccess();
                setFormData({
                    title: '',
                    description: '',
                    img: null,
                    ...(type === 'activity' && { city: '' }),
                    ...(type === 'munchies' && { region: '' }),
                    ...(type === 'landmark' && { historical_significance: '', attractions: '' }),
                    ...(type === 'food' && { ingredients: '' }),
                    ...(type === 'activity' && { difficulty_level: '' })
                });
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to add data');
                console.error('Error response from server:', errorData);
            }
        } catch (err) {
            setError('An error occurred while adding data.');
            console.error('Network or other error:', err);
        }
    };

    return (
        <div className="overlay">
            <div className="add-item-form-container">
                {closeForm && <button className="close-button" onClick={closeForm}>✖</button>}
                <h3>Add a New {type.charAt(0).toUpperCase() + type.slice(1)}</h3>
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
                        <input
                            type="file"
                            name="img"
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </label>
                    {type === 'activity' && (
                        <label>
                            City:
                            <input
                                type="text"
                                name="city"
                                value={formData.city || ''}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    {type === 'munchies' && (
                        <label>
                            Region:
                            <input
                                type="text"
                                name="region"
                                value={formData.region || ''}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    {type === 'landmark' && (
                        <>
                            <label>
                                Historical Significance:
                                <textarea
                                    name="historical_significance"
                                    value={formData.historical_significance || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Attractions (comma separated):
                                <input
                                    type="text"
                                    name="attractions"
                                    value={formData.attractions || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </>
                    )}
                    {type === 'food' && (
                        <label>
                            Ingredients (comma separated):
                            <input
                                type="text"
                                name="ingredients"
                                value={formData.ingredients || ''}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    )}
                    {type === 'activity' && (
                        <label>
                            Difficulty Level:
                            <input
                                type="text"
                                name="difficulty_level"
                                value={formData.difficulty_level || ''}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    )}
                    <button type="submit">Add {type}</button>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Added successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default AddItemForm;
