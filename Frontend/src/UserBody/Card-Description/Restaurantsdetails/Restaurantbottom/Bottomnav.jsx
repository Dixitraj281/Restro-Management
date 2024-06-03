import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Bottomnav.css";

function Bottomnav() {
    const location = useLocation();

    return (
        <div className='bottom-header'>
            <div className='bottom-header__center'>
                <Link to='/info/overview' className={location.pathname === '/info/overview' ? 'active' : ''}>Overview</Link>                
                <Link to='/info/photos' className={location.pathname === '/info/photos' ? 'active' : ''}>Photos</Link>
                <Link to='/info/menu' className={location.pathname === '/info/menu' ? 'active' : ''}>Menu</Link>
                <Link to='/info/book' className={location.pathname === '/info/book' ? 'active' : ''}>Book a Table</Link>
            </div>
        </div>
    );
}

export default Bottomnav;
