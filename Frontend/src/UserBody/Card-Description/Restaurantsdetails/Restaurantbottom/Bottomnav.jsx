import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import "./Bottomnav.css";

function Bottomnav() {
    const location = useLocation();
    const { restaurantName } = useParams();
    

    return (
        <div className='bottom-header'>
            <div className='bottom-header__center'>
                <Link to={`/info/${restaurantName}/overview`} className={location.pathname === `/info/${restaurantName}/overview` ? 'active' : ''}>Overview</Link>                
                <Link to={`/info/${restaurantName}/photos`} className={location.pathname === `/info/${restaurantName}/photos` ? 'active' : ''}>Photos</Link>
                <Link to={`/info/${restaurantName}/menu`} className={location.pathname === `/info/${restaurantName}/menu` ? 'active' : ''}>Menu</Link>
                <Link to={`/info/${restaurantName}/book`} className={location.pathname === `/info/${restaurantName}/book` ? 'active' : ''}>Book a Table</Link>
            </div>
        </div>
    );
}

export default Bottomnav;
