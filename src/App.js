import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InventoryItemForm from './components/InventoryItemForm';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-inventory" element={<InventoryItemForm />} />
        <Route path="/edit-inventory" element={<InventoryItemForm />} />
        <Route path="/add-supplier" element={<SupplierForm />} />
        <Route path="/supplier-list" element={<SupplierList />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
