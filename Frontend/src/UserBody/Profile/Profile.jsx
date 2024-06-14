import React, { useEffect } from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import profile from "../../Assets/Subtract.svg";
import AdminHeader from "../../Adminportal/Admins/AdminHeader/AdminHeader";

const Profile = ({ toggleSidebar, isSidebarOpen }) => {
  useEffect(() => {
    function addAnimToLinks() {
      let accountLinks = document.querySelector(".profile-accounts").children;
      for (let k = 0; k < accountLinks.length; k++) {
        accountLinks[k].style.animation = `popUp 1s ease-in-out ${k * 0.2 + 1.5}s both`;
      }
    }

    addAnimToLinks();
  }, []);

  return (
    <div className={`content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
      <AdminHeader toggleSidebar={toggleSidebar} />
      <div className="profile-body">
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
            <span className="profile-intro-designation">User</span>
            <div className="profile-intro-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="profile-accounts">
            <a href="#" className="profile-account-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="profile-account-link">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="profile-account-link">
              <FontAwesomeIcon icon={faBehance} size="2x" />
            </a>
            <a href="#" className="profile-account-link">
              <FontAwesomeIcon icon={faDribbble} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
