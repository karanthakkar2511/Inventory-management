import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const InventoryList = ({ items, suppliers }) => {
    const [inventory, setInventory] = useState(items);
    const navigate = useNavigate();

    const handleDelete = (index) => {
        const updatedItems = inventory.filter((_, i) => i !== index);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setInventory(updatedItems);
    };

    const handleEdit = (index) => {
        const itemToEdit = inventory[index];
        localStorage.setItem('editItem', JSON.stringify({ item: itemToEdit, index }));
        navigate('/edit-inventory');
    };

    return (
        <div className="inventory-list">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Stock Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item, index) => {
                        const supplier = suppliers.find(s => s.id.toString() === item.supplierId.toString());
                        const stockLevelColor = item.quantity > 500 ? 'green' : 'red';
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>
                                <td>{supplier ? supplier.name : 'Unknown'}</td>
                                <td style={{ color: stockLevelColor }}>
                                    {item.quantity > 500 ? 'Sufficient' : 'Low'}
                                </td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                                    <button className="remove-btn" onClick={() => handleDelete(index)}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryList;
