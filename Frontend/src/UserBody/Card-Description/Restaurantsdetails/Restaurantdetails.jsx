// Restaurantdetails.js
import React from 'react';
import './Restaurantdetails.css';
import { Button } from "antd";

const Restaurantdetails = (props) => {
  return (
    <div className="restaurant-details-container">
      <div className="title-and-rating">
        <div className="title">{props.details.res_name}</div>
        <div className="rating">4.3</div>
      </div>
      <div className="details">
        <div className="cusine">{props.details.cusines && props.details.cusines.length > 0 ? (
          props.details.cusines.map((cusine, index) => (
            <span key={index}>{cusine} </span>
          ))
        ) : (
          <p>No Carousel Images available</p>
        )}</div>
      <div className="address">{props.details.address}</div>
        <div className="timestatus"> <span className='status-timing'>{props.details.openTime}</span> - <span className='status-timing'>{props.details.closeTime}</span></div>
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
