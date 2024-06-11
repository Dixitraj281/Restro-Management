import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Subtract.svg';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <h2 className="sidebar-heading"><img src={logo} alt="adminlogo" /></h2>
      <ul>
        <li><Link to="/admin">Add Restaurant</Link></li>
        <li><Link to="/admin/orders">Orders</Link></li>
        <li><Link to="/admin/profile">Profile</Link></li>
        <li><Link to="/admin/subscription">Subscription</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
