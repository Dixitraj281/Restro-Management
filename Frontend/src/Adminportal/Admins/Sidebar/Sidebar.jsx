import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUnlock, faBurger, faUser } from '@fortawesome/free-solid-svg-icons';
// import profilePic from '../../../Assets/profile-pic.png'; 
import logo from '../../../Assets/Subtract.svg'; 
import './Sidebar.css';

const Sidebar = ({isSidebarOpen}) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-profile">
        {/* Uncomment the line below to include profile picture */}
        {/* <img src={profilePic} alt="Sanjay Kumar" /> */}
        <h3>Reserver</h3>
      </div>
      <ul>
        <li><Link to="/admin"><FontAwesomeIcon icon={faUtensils} /> Add Restaurant</Link></li>
        <li><Link to="/admin/orders"><FontAwesomeIcon icon={faBurger} /> Orders</Link></li>
        <li><Link to="/admin/subscription"><FontAwesomeIcon icon={faUnlock} /> Subscription</Link></li>
        <li><Link to="/admin/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
