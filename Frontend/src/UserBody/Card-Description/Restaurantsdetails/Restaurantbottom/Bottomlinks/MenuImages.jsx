import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import './menuimages.css';

const MenuImages = ({ image, pages }) => {
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
            src={image}
            currentIndex={currentImg}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeViewer}
          />
        )}
        <div className="images-grid">
          {image.map((src, index) => (
            <div key={index} onClick={() => openViewer(index)} className="image-card">
              <img src={src} alt={`menu-${index}`} className="image-item" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuImages;
