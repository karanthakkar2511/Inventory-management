import React from 'react';
import './SupplierList.css'; // Assuming you'll create a CSS file for styles

const SupplierList = () => {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    return (
        <div className="supplier-list-container">
            <h2 className="supplier-list-title">Supplier List</h2>
            <ul className="supplier-list">
                {suppliers.map(supplier => (
                    <li key={supplier.id} className="supplier-item">
                        <strong className="supplier-name">{supplier.name}</strong>
                        <span className="supplier-contact">{supplier.contact}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupplierList;
