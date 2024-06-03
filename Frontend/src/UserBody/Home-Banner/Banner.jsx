import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      tabIndex="0"
      aria-label="Restaurants Near Me"
      role="banner"
      className="banner-container"
    >
      <div aria-hidden="true" className="banner-content">
        <div className="text-wrapper">
          <h1 className="text-container">
            Restaurants Near Me
          </h1>
          <div className="curved-underline">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 78 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#F15700" strokeWidth="1.5" />
            </svg>
          </div>
          <Button
            onClick={() => navigate('/search')}
            type="primary"
            style={{ marginTop: '20px' }}  // Adjust the margin as needed for better positioning
          >
            Explore Nearby
          </Button>
        </div>
        <div className="image-wrapper">
          <img
            className="image"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
            width="501"
            height="300"
            alt="food"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
