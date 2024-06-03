import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import './menuimages.css'

const MenuImages = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const openViewer = (index) => {
    setCurrentImg(index);
    setIsMenuOpen(true);
  };

  const closeViewer = () => setIsMenuOpen(false);

  return (
    <>
      <div className="menu-images-container">
        {isMenuOpen && (
          <ImageViewer
            src={props.image}
            currentIndex={currentImg}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeViewer}
          />
        )}
        <div className="images-grid">
          {props.image.map((src, index) => (
            <div key={index} onClick={() => openViewer(index)} className="image-card">
              <img src={src} alt={`menu-${index}`} className="image-item" />
            </div>
          ))}
        </div>
        <p className='text-xs md:text-sm text-gray-600'>{props.pages} pages</p>
      </div>
    </>
  );
};

export default MenuImages;
