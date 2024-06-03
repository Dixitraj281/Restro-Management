import React from 'react';
import "./photos.css"

const Photos = () => {
  const images = new Array(10).fill('https://b.zmtcdn.com/data/pictures/chains/7/50877/c0dbcfab1462feb7f8a8ba0d90745929.png');

  return (
    <div className="photocard-container">
      {images.map((src, index) => (
        <div key={index} className=" photocard">
          <img className="menucard-item photocard-item" src={src} alt="img"/>
        </div>
      ))}
    </div>
  );
}

export default Photos;
