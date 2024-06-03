import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import AddCusines from "./AddCusines/AddCusines";
import AddFoodPhotos from "./AddFoodPhotos";
import AddMenuPhotos from "./AddMenuPhotos";
import AddResPhotos from "./AddResPhotos";
<<<<<<< HEAD
import axios from "axios";
import { Checkmark } from "react-checkmark";

=======
import { Checkmark } from "react-checkmark";
import './Admin.css';
import AdminHeader from "./AdminHeader/AdminHeader";
import logo from '../../Assets/Subtract.svg'
>>>>>>> 183706b238c5711dd72153fceef86fb8cd8f54bf

const Admin = () => {
  const [hotelName, setHotelName] = useState("");
  const [isHotelName, setIsHotelName] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescription, setIsDescription] = useState(false);
  const [desImage, setDesImage] = useState("");
<<<<<<< HEAD
  const [isDesImage, setIsDesImage] = useState(false);
  const [cusines, setCusines] = useState([]);
  const [isCusines, setIsCusines] = useState(false);
  const [address, setAddress] = useState("");
  const [isAddress, setIsAddress] = useState(false);
  const [moreInfo, setMoreInfo] = useState([]);
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [foodImage, setFoodImage] = useState([]);
  const [isFoodImage, setIsFoodImage] = useState(false);
  const [menuImage, setMenuImage] = useState([]);
  const [isMenuImage, setIsMenuImage] = useState(false);
  const [resImage, setResImage] = useState([]);
  const [isResImage, setIsResImage] = useState(false);
=======
  const [cusines, setCusines] = useState([]);
  const [address, setAddress] = useState("");
  const [isAddress, setIsAddress] = useState(false);
  const [moreInfo, setMoreInfo] = useState([]);
  const [foodImage, setFoodImage] = useState([]);
  const [menuImage, setMenuImage] = useState([]);
  const [resImage, setResImage] = useState([]);
>>>>>>> 183706b238c5711dd72153fceef86fb8cd8f54bf
  const [openTime, setOpenTime] = useState("");
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [closeTime, setCloseTime] = useState("");
  const [isCloseTime, setIsCloseTime] = useState(false);
  const [tableCap, setTableCap] = useState(0);
  const [isTableCap, setIsTableCap] = useState(false);
<<<<<<< HEAD
   

 
  return (
    <>
      <div className="HotelName">
        <h1>Enter name of the hotel</h1>
        <input
          type="text"
          required
          onChange={(e) => setHotelName(e.target.value)}
        ></input>
        <div className="Buttons">
          <button
            onClick={(e) => {
              setIsHotelName(true);
            }}
          >
            Click to Conform
          </button>
          {isHotelName && (
            <Checkmark className="checkmark" size="20px" width="30px" />
          )}
        </div>
      </div>
      <div className="description">
        <h1>Enter description</h1>
        <textarea required onChange={(e) => setDescription(e.target.value)} />
        <div className="Buttons">
          <button
            onClick={(e) => {
              setIsDescription(true);
            }}
          >
            Click to Conform
          </button>
          {isDescription && (
            <Checkmark className="checkmark" size="20px" width="30px" />
          )}
        </div>
      </div>
      <ImageUpload a={setDesImage} />

      <AddCusines title={"Add Cusine"} a={setCusines} />
      <div className="Address">
        <h1>Address</h1>
        <input
          type="text"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="Buttons">
          <button
            onClick={(e) => {
              setIsAddress(true);
            }}
          >
            Click to Conform
          </button>
          {isAddress && (
            <Checkmark className="checkmark" size="20px" width="30px" />
          )}
        </div>
      </div>
      <div className="MoreInfo">
        <AddCusines title={"More Info"} a={setMoreInfo} />
      </div>
      <AddFoodPhotos a={setFoodImage} />
      <AddMenuPhotos a={setMenuImage} />
      <AddResPhotos a={setResImage} />
      <div>
        Opening Time:{" "}
        <input
          type="time"
          required
          onChange={(e) => setOpenTime(e.target.value)}
        />
        <div className="Buttons">
          <button
            onClick={(e) => {
              setIsOpenTime(true);
            }}
          >
            Click to Conform
          </button>
          {isOpenTime && (
            <Checkmark className="checkmark" size="20px" width="30px" />
          )}
        </div>
      </div>
      <div>
        Closing Time:{" "}
        <input
          type="time"
          required
          onChange={(e) => setCloseTime(e.target.value)}
        />
        <div className="Buttons">
          <button
            onClick={(e) => {
              setIsCloseTime(true);
            }}
          >
            Click to Conform
          </button>
          {isCloseTime && (
            <Checkmark className="checkmark" size="20px" width="30px" />
          )}
        </div>
      </div>
      <div>
        Total Tables Capacity{" "}
        <input
          type="number"
          required
          onChange={(e) => setTableCap(e.target.value)}
        />
        <div className="Buttons">
        <button onClick={(e)=>{setIsTableCap(true)}}>Click to Conform</button>
        {isTableCap&&<Checkmark className="checkmark" size='20px' width="30px" />}
        </div>
      </div>
      <button onClick={handleOnClick}>Add your Restruant</button>
    </>
=======

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOnClick = () => {
    console.log(hotelName);
    console.log(description);
    console.log(address);
    console.log(cusines);
    console.log(moreInfo);
    console.log(foodImage);
    console.log(menuImage);
    console.log(resImage);
    console.log(openTime);
    console.log(closeTime);
    console.log(tableCap);
    console.log(desImage);
  };

  return (
    <div className="admin-container">
      
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>

        <h2 className="sidebar-heading"><img src={logo} alt="adminlogo" /></h2>
        <ul>
          <li><a href="#hotelName">Hotel Name</a></li>
          <li><a href="#description">Description</a></li>
          <li><a href="#address">Address</a></li>
          <li><a href="#moreInfo">More Info</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#timings">Timings</a></li>
          <li><a href="#capacity">Capacity</a></li>
          <li><a href="#submit">Submit</a></li>
        </ul>
      </div>
      
      <div className="admin-main-content">
      <div className={`content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
      <AdminHeader toggleSidebar={toggleSidebar} />
        <section id="hotelName" className="section">
          <h1>Restaurant Name</h1>
          <input
            type="text"
            required
            className="input-field"
            placeholder="Enter Restaurant"
            onChange={(e) => setHotelName(e.target.value)}
          />
          <div className="Buttons">
            <button onClick={() => setIsHotelName(true)}>Click to confirm</button>
            {isHotelName && hotelName.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
          </div>
        </section>

        <section id="description" className="section">
          <h1>Enter description</h1>
          <textarea
            required
            className="input-field"
            placeholder="Enter Restaurant's Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="Buttons">
            <button onClick={() => setIsDescription(true)}>Click to confirm</button>
            {isDescription && description.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
          </div>
        </section>

        <section className="section">
          <ImageUpload a={setDesImage} />
        </section>

        <section className="section">
          <AddCusines title={"Add Cuisine"} a={setCusines} />
        </section>

        <section id="address" className="section">
          <h1>Address</h1>
          <input
            type="text"
            required
            className="input-field"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="Buttons">
            <button onClick={() => setIsAddress(true)}>Click to confirm</button>
            {isAddress && address.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
          </div>
        </section>

        <section id="moreInfo" className="section">
          <AddCusines title={"More Info"} a={setMoreInfo} />
        </section>

        <section id="photos" className="section">
          <AddFoodPhotos a={setFoodImage} />
          <AddMenuPhotos a={setMenuImage} />
          <AddResPhotos a={setResImage} />
        </section>

        <section id="timings" className="section">
          <div className="opening-div">
          <div>
            <h1>Opening Time:</h1>
            <input
              type="time"
              required
              className="input-field"
              onChange={(e) => setOpenTime(e.target.value)}
            />
          </div>
          <div className="Buttons">
            <button onClick={() => setIsOpenTime(true)}>Click to confirm</button>
            {isOpenTime && openTime.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
          </div>
          </div>
          <br/>
          <div className="closing-div">
          <div>
            <h1>Closing Time:</h1>
            <input
              type="time"
              required
              className="input-field"
              onChange={(e) => setCloseTime(e.target.value)}
            />
          </div>
          <div className="Buttons">
            <button onClick={() => setIsCloseTime(true)}>Click to confirm</button>
            {isCloseTime && closeTime.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
          </div>
          </div>
        </section>

        <section id="capacity" className="section">
          <div>
            <h1>Total Tables Capacity:</h1>
            <input
              type="number"
              required
              className="input-field"
              onChange={(e) => setTableCap(e.target.value)}
            />
          </div>
          <div className="Buttons">
            <button onClick={() => setIsTableCap(true)}>Click to confirm</button>
            {isTableCap && tableCap !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
          </div>
        </section>

        <section id="submit" className="section">
          <button onClick={handleOnClick} className="submit-button">Add your Restaurant</button>
        </section>
        <br/>
      </div>
      </div>
    </div>
>>>>>>> 183706b238c5711dd72153fceef86fb8cd8f54bf
  );
};

export default Admin;
