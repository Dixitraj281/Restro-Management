// Restaurantdetails.js
import React from 'react';
import './Restaurantdetails.css';
import { Button } from "antd";

const Restaurantdetails = () => {
  return (
    <div className="restaurant-details-container">
      <div className="title-and-rating">
        <div className="title">Raahi </div>
        <div className="rating">4.3</div>
      </div>
      <div className="details">
        <div className="cusine">North Indian, Pasta, Pizza, Desserts, Beverages</div>
        <div className="address">St. Mark road</div>
        <div className="timestatus"> <span className='status'>Open now</span> - <span className='status-timing'>12noon - 11:30pm</span></div>
        <div className="extra-details">
                <Button variant="outlined" className='extra-details-btn'>Direction</Button>
                <Button variant="outlined" className='extra-details-btn'>Bookmark</Button>
                <Button variant="outlined" className='extra-details-btn'>share</Button>
        </div>
      </div>
    </div>
  );
};

export default Restaurantdetails;
