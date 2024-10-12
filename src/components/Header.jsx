import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>Inventory Management System</h1>
            </div>
            <nav className="header-nav">
                <Link to="/" className="header-link">Inventory Dashboard</Link>
                <Link to="/add-inventory" className="header-link">Add Inventory Item</Link>
                <Link to="/add-supplier" className="header-link">Add Supplier</Link>
                <Link to="/supplier-list" className="header-link">Supplier List</Link>
            </nav>
        </div>
    );
};

export default Header;
