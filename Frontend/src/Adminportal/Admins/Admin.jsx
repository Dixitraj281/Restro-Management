import React from "react";
import ImageUpload from "./ImageUpload";
import AddCusines from "./AddCusines/AddCusines";
import AddFoodPhotos from "./AddFoodPhotos";
import AddMenuPhotos from "./AddMenuPhotos";
import AddResPhotos from "./AddResPhotos";
import "./Admin.css"; // Assuming you will add styles here

const Admin = () => {
  const handleOnClick = () => {
    console.log("You submitted data");
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin Menu</h2>
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
      </aside>

      <div className="content">
        <section id="hotelName" className="section">
          <h1>Enter name of the hotel</h1>
          <input type="text" className="input-field" />
        </section>
        <section id="description" className="section">
          <h1>Enter description</h1>
          <textarea className="input-field"></textarea>
        </section>
        <section className="section"><ImageUpload /></section>
        <section className="section"><AddCusines title={"Add Cuisine"} /></section>
        <section id="address" className="section">
          <h1>Address</h1>
          <input type="text" className="input-field" />
        </section>
        <section id="moreInfo" className="section">
          <AddCusines title={"More Info"} />
        </section>
        <section id="photos" className="section">
          <AddFoodPhotos />
          <AddMenuPhotos />
          <AddResPhotos />
        </section>
        <section id="timings" className="section">
          <div>Opening Time: <input type="time" className="input-field" /></div>
          <div>Closing Time: <input type="time" className="input-field" /></div>
        </section>
        <section id="capacity" className="section">
          <div>Total Tables Capacity: <input type="text" className="input-field" /></div>
        </section>
        <section id="submit" className="add-restaurant-btn">
          <button onClick={handleOnClick} className="submit-button">Add your Restaurant</button>
        </section>
      </div>
    </div>
  );
};

export default Admin;
