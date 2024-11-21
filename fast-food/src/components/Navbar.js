import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Подключим стили для navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">FastFood</Link>
      </div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
        <Link to="/history" className="nav-link">Purchase History</Link>
      </div>
    </div>
  );
};

export default Navbar;
