import React, { useEffect, useState } from "react";
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


  
  

  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    username:"",
    designation: "Admin",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });

  useEffect(() => {
    function addAnimToLinks() {
      let accountLinks = document.querySelector(".profile-accounts").children;
      for (let k = 0; k < accountLinks.length; k++) {
        accountLinks[k].style.animation = `popUp 1s ease-in-out ${k * 0.2 + 1.5}s both`;
      }
    }

    addAnimToLinks();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({
      ...profileDetails,
      [name]: value,
    });
  };
  const getAdminData =()=>{
    const adminData = JSON.parse(localStorage.getItem('adminProfile'));
    console.log(adminData);
    console.log(1);
    
    setProfileDetails({
      username:`${adminData.first_name} ${adminData.last_name}`,
      designation: "User",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  

    });
  }
  useEffect(()=>{
    getAdminData();

  },[]);
 
  
 

  const handleSave = () => {
    // Add your save logic here (e.g., API call to save the details)
    setIsEditing(false);
  };

  return (
    <div className={`content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
      <AdminHeader toggleSidebar={toggleSidebar} />
      <div className="profile-body">
        <div className="profile-wrapper">
          <div className="profile-image">
            <img src={profile} alt="Profile" />
            <span className="profile-status">online</span>
            <div className="temp-overlay one"></div>
            <div className="temp-overlay two"></div>
          </div>
          {isEditing ? (
            <div className="profile-edit-form">
              <input
                type="text"
                name="username"
                value={profileDetails.username}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="designation"
                value={profileDetails.designation}
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                value={profileDetails.description}
                onChange={handleInputChange}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleEditToggle}>Cancel</button>
            </div>
          ) : (
            <>
              <div className="profile-username">
                <span>{profileDetails.username}</span>
              </div>
              <div className="profile-intro">
                <span className="profile-intro-designation">
                  {profileDetails.designation}
                </span>
                <div className="profile-intro-description">
                  {profileDetails.description}
                </div>
              </div>
              <button onClick={handleEditToggle}>Edit Profile</button>
            </>
          )}
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
