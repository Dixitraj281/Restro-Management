import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import AddCusines from "./AddCusines/AddCusines";
import AddFoodPhotos from "./AddFoodPhotos";
import AddMenuPhotos from "./AddMenuPhotos";
import AddResPhotos from "./AddResPhotos";
import axios from "axios";
import { Checkmark } from "react-checkmark";


const Admin = () => {
  const [hotelName, setHotelName] = useState("");
  const [isHotelName, setIsHotelName] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescription, setIsDescription] = useState(false);
  const [desImage, setDesImage] = useState("");
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
  const [openTime, setOpenTime] = useState("");
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [closeTime, setCloseTime] = useState("");
  const [isCloseTime, setIsCloseTime] = useState(false);
  const [tableCap, setTableCap] = useState(0);
  const [isTableCap, setIsTableCap] = useState(false);
   

 
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
  );
};

export default Admin;
