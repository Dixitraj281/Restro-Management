import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../Assets/Subtract.svg';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <h2 className="sidebar-heading"><img src={logo} alt="adminlogo" /></h2>
      <ul>
        <li><Link to="/admin"><FontAwesomeIcon icon={faUtensils} /> Add Restaurant</Link></li>
        <li><Link to="/admin/subscription"><FontAwesomeIcon icon={faDollarSign} /> Subscription</Link></li>
        <li><Link to="/admin/orders"><FontAwesomeIcon icon={faShoppingCart} /> Orders</Link></li>
        <li><Link to="/admin/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
