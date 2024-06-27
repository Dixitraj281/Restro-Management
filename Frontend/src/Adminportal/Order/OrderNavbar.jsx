// src/components/Navbar.js
import React from 'react';
import './OrderNavbar.css';
import { Link } from 'react-router-dom';

const OrderNavbar = () => {
  return (
    <nav className="navbar">
      <ul className='link-box'>
        <Link to="/allOrders" className='link'>All orders</Link>
        <Link to="/activeOrders" className='link'>Active orders</Link>
        <Link to="/completedOrders" className='link'>Completed orders</Link>
        <Link to="/todayOrders" className='link'>Today orders</Link>
      </ul>
    </nav>
  );
};

export default OrderNavbar;
