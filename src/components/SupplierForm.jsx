import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupplierForm.css'; // Assuming you'll create a CSS file for styles

const SupplierForm = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSupplier = { id: Date.now(), name, contact };
        const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
        localStorage.setItem('suppliers', JSON.stringify([...suppliers, newSupplier]));
        navigate('/supplier-list');
    };

    return (
        <form className="supplier-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Add Supplier</h3>
            <input
                type="text"
                placeholder="Supplier Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
            />
            <input
                type="text"
                placeholder="Contact Details"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="form-input"
            />
            <button className="form-button" type="submit">Add Supplier</button>
        </form>
    );
};

export default SupplierForm;
