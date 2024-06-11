import React, { useEffect } from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import profile from '../../Assets/Subtract.svg'

const Profile = () => {
  useEffect(() => {

    function addAnimToLinks() {
      let accountLinks = document.querySelector(".profile-accounts").children;
      for (let k = 0; k < accountLinks.length; k++) {
        accountLinks[k].style.animation = `popUp 1s ease-in-out ${k * 0.2 + 1.5}s both`;
      }
    }

    // setTimeout(typeWriter, 500);
    addAnimToLinks();
  }, []);

  return (
    <div className='profile-body'>
    <div className="profile-wrapper">
      <div className="profile-image">
        <img src={profile} alt="Julia Smith" />
        <span className="profile-status">online</span>
        <div className="temp-overlay one"></div>
        <div className="temp-overlay two"></div>
      </div>
      <div className="profile-username">
        <span id="profile-username-first">J</span>
        <span id="profile-username-second">S</span>
      </div>
      <div className="profile-intro">
        <span className="profile-intro-designation">user</span>
        <div className="profile-intro-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500's, when an unknown printer took a galley of type.
        </div>
      </div>
      {/* <div className="profile-stats">
        <div className="profile-stat">
          <span className="profile-stat-title">BOOKINGS</span>
          <br />
          <span className="profile-stat-value">2,000</span>
        </div>
      </div> */}
      <div className="profile-accounts">
        <a href="#" className="profile-account-link"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
        <a href="#" className="profile-account-link"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a href="#" className="profile-account-link"><FontAwesomeIcon icon={faBehance} size="lg" /></a>
        <a href="#" className="profile-account-link"><FontAwesomeIcon icon={faDribbble} size="lg" /></a>
      </div>
    </div>
    </div>
  );
}

export default Profile;