import React from 'react';
import "./photos.css";

const Photos = ({ photo }) => {
  return (
    <div className="photocard-container">
      {photo.map((items) => (
        <div key={items.id} className="photocard">
          <img className="menucard-item photocard-item" src={items.src} alt={items.alt}/>
        </div>
      ))}
    </div>
  );
}

export default Photos;
