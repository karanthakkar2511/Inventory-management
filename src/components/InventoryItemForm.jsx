import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItemForm.css'; // Assuming you'll create a CSS file for styles

const InventoryItemForm = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [supplierId, setSupplierId] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    const navigate = useNavigate();

    useEffect(() => {
        const editItemData = JSON.parse(localStorage.getItem('editItem'));
        if (editItemData) {
            const { item, index } = editItemData;
            setName(item.name);
            setQuantity(item.quantity);
            setCategory(item.category);
            setSupplierId(item.supplierId);
            setEditIndex(index);
            localStorage.removeItem('editItem');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, quantity: parseInt(quantity), category, supplierId };
        const items = JSON.parse(localStorage.getItem('items')) || [];

        if (editIndex !== null) {
            items[editIndex] = newItem;
        } else {
            items.push(newItem);
        }

        localStorage.setItem('items', JSON.stringify(items));
        navigate('/');
    };

    return (
        <form className="inventory-form" onSubmit={handleSubmit}>
            <h3 className="form-title">{editIndex !== null ? 'Edit Inventory Item' : 'Add Inventory Item'}</h3>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="form-input"
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="form-input"
            />
            <select
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                required
                className="form-select"
            >
                <option value="">Select Supplier</option>
                {suppliers.map(supplier => (
                    <option key={supplier.id} value={supplier.id}>
                        {supplier.name}
                    </option>
                ))}
            </select>
            <button className="form-button" type="submit">
                {editIndex !== null ? 'Update Item' : 'Add Item'}
            </button>
        </form>
    );
};

export default InventoryItemForm;
