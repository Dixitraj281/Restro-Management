import React from "react";
import ImageUpload from "./ImageUpload";
import AddCusines from "./AddCusines/AddCusines";
import AddFoodPhotos from "./AddFoodPhotos";
import AddMenuPhotos from "./AddMenuPhotos";
import AddResPhotos from "./AddResPhotos";

const Admin = () => {
  const handleOnClick = ()=>{
    console.log("you submitted data");

  }
  return (
    <>
      <div className="HotelName">
        <h1>Enter name of the hotel</h1>
        <input type="text" className=""></input>
      </div>
      <div className="description">
        <h1>Enter description</h1>
        <textarea></textarea>
      </div>
      <ImageUpload />
      <AddCusines title={"Add Cusine"} />
      <div className="Address">
        <h1>Address</h1>
        <input type="text" />
      </div>
      <div className="MoreInfo">
        <AddCusines title={"More Info"} />
      </div>
      <AddFoodPhotos />
      <AddMenuPhotos />
      <AddResPhotos /> 
      <div>Opening Time: <input type="time"/></div>
      <div>Closing Time: <input type="time"/></div>
      <div>Total Tables Capacity <input type="text"/></div>
      <button onClick={handleOnClick}>Add your Restruant</button> 
    </>
  );
};

export default Admin;
