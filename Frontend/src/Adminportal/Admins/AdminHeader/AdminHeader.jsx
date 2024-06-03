import React from 'react';
import './AdminHeader.css';

function AdminHeader({ toggleSidebar }) {
    return (
        <div className='admin-header'>
            
            <div className='admin-header__center'>
            <button className="admin-header__hamburger" onClick={toggleSidebar}>
                &#9776;
            </button>
            </div>
            <div className='admin-header__right'>
                Admin Portal
            </div>
        </div>
    )
}

export default AdminHeader;
