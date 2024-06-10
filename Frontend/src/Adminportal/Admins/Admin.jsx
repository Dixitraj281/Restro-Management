import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import AddCusines from "./AddCusines/AddCusines";
import AddFoodPhotos from "./AddFoodPhotos";
import AddMenuPhotos from "./AddMenuPhotos";
import AddResPhotos from "./AddResPhotos";
import { Checkmark } from "react-checkmark";
import "./Admin.css";
import AdminHeader from "./AdminHeader/AdminHeader";
import logo from "../../Assets/Subtract.svg";
import axios from "axios";

const Admin = () => {
  const [hotelName, setHotelName] = useState("");
  const [isHotelName, setIsHotelName] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescription, setIsDescription] = useState(false);
  const [desImage, setDesImage] = useState([]);
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

  const [desUrls, setDesUrls] = useState([]);
  const [desLoad, setDesLoad] = useState(false);
  const [foodUrls, setFoodUrls] = useState([]);
  const [foodLoad, setFoodLoad] = useState(false);
  const [menuUrls, setMenuUrls] = useState([]);
  const [menuLoad, setMenuLoad] = useState(false);
  const [resUrls, setResUrls] = useState([]);
  const [resLoad, setResLoad] = useState(false);
  const [active, setActive] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  var totalPhotosUploaded = 0,
    totalPhotosSent = 0;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const uploadImagesToCloudinary = async (imageArr) => {
    if (imageArr.length === 0) return [];
    console.log("inside enter1");
    const newUrls = [];
    for (const file of imageArr) {
      console.log("3rd inside enter");
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "res_img");
      data.append("cloud_name", "dzeaake8o");

      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dzeaake8o/image/upload",
          data
        );
        console.log("hello data ", res.data.secure_url);
        newUrls.push(res.data.secure_url);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }

    return newUrls;
  };
  const ImageUploaderFunction = (imageArr) => {
    console.log("1st inside enter");
    const uploadImages = async () => {
      console.log("2nd inside enter");

      const uploadedUrls = await uploadImagesToCloudinary(imageArr);
      return uploadedUrls;
    };
    return uploadImages();
  };
  const handleOnClick = () => {
    console.log(hotelName);
    console.log(description);
    console.log(desImage);
    console.log(cusines);
    console.log(address);
    console.log(moreInfo);
    console.log(foodImage);
    console.log(menuImage);
    console.log(resImage);
    console.log(openTime);
    console.log(closeTime);
    console.log(tableCap);
    // first i need to get all the images url for desImage which will store in another array desurls
    try {
      const handleUpload = async (desImage, num) => {
        const temp = await ImageUploaderFunction(desImage);
        if (num == 1) {
          setDesUrls(temp);
          setDesLoad(true);
        } else if (num == 2) {
          setFoodUrls(temp);
          setFoodLoad(true);
        } else if (num == 3) {
          setMenuUrls(temp);
          setMenuLoad(true);
        } else if (num == 4) {
          setResUrls(temp);
          setResLoad(true);
        }
      };
      const uploadAllPhotosAndDocument = async () => {
        await handleUpload(desImage, 1);
        await handleUpload(foodImage, 2);
        await handleUpload(menuImage, 3);
        await handleUpload(resImage, 4);
      };

      uploadAllPhotosAndDocument();
      setActive(true);
    } catch (err) {
      setActive(false);
      console.log("Images were not successfully stored!!");
    }
  };
  const sendDataToBackend = async () => {
    console.log("hey data is getting sent");
    const data = {
      hotelName,
      description,
      desUrls,
      cusines,
      address,
      moreInfo,
      foodUrls,
      menuUrls,
      resUrls,
      openTime,
      closeTime,
      tableCap,
    };

    try {
      const response = await fetch("http://localhost:4500/admin/addrestraunt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setDataSent(true);
    } catch (err) {
      console.error("Error sending data to backend:", err);
    }
  };
  useEffect(() => {
    // This effect runs when any of the URLs are updated
    setDesUrls(desUrls);
    setFoodUrls(foodUrls);
    setMenuUrls(menuUrls);
    setResUrls(resUrls);
    setDesLoad(desLoad);
    setFoodLoad(foodLoad);
    setMenuLoad(menuLoad);
    setResLoad(resLoad);
    setActive(active);
    totalPhotosSent =
      desUrls.length + foodUrls.length + menuUrls.length + resUrls.length;
    if (
      desLoad == true &&
      foodLoad == true &&
      menuLoad == true &&
      resLoad == true &&
      active == true
    ) {
      console.log("we are sending the data");
      totalPhotosUploaded =
        desImage.length + foodImage.length + menuImage.length + resImage.length;
      console.log(totalPhotosSent, totalPhotosUploaded);

      if (totalPhotosSent === totalPhotosUploaded) sendDataToBackend();
    }
    console.log("Updated desUrls:", desUrls);
    console.log("Updated foodUrls:", foodUrls);
    console.log("Updated menuUrls:", menuUrls);
    console.log("Updated resUrls:", resUrls);
  }, [
    desUrls,
    foodUrls,
    menuUrls,
    resUrls,
    desLoad,
    foodLoad,
    menuLoad,
    resLoad,
    active,
  ]);

  useEffect(() => {
    setDataSent(dataSent);
  }, [dataSent]);

  return (
    <>
      <div className="admin-container">
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <h2 className="sidebar-heading">
            <img src={logo} alt="adminlogo" />
          </h2>
          <ul>
            <li>
              <a href="#hotelName">Hotel Name</a>
            </li>
            <li>
              <a href="#description">Description</a>
            </li>
            <li>
              <a href="#address">Address</a>
            </li>
            <li>
              <a href="#moreInfo">More Info</a>
            </li>
            <li>
              <a href="#photos">Photos</a>
            </li>
            <li>
              <a href="#timings">Timings</a>
            </li>
            <li>
              <a href="#capacity">Capacity</a>
            </li>
            <li>
              <a href="#submit">Submit</a>
            </li>
          </ul>
        </div>

        <div className="admin-main-content">
          <div
            className={`content ${
              isSidebarOpen ? "with-sidebar" : "full-width"
            }`}
          >
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
                <button onClick={() => setIsHotelName(true)}>
                  Click to confirm
                </button>
                {isHotelName && hotelName.length != 0 && (
                  <Checkmark className="checkmark" size="20px" width="30px" />
                )}
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
                <button onClick={() => setIsDescription(true)}>
                  Click to confirm
                </button>
                {isDescription && description.length != 0 && (
                  <Checkmark className="checkmark" size="20px" width="30px" />
                )}
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
                <button onClick={() => setIsAddress(true)}>
                  Click to confirm
                </button>
                {isAddress && address.length != 0 && (
                  <Checkmark className="checkmark" size="20px" width="30px" />
                )}
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
                  <button onClick={() => setIsOpenTime(true)}>
                    Click to confirm
                  </button>
                  {isOpenTime && openTime.length != 0 && (
                    <Checkmark className="checkmark" size="20px" width="30px" />
                  )}
                </div>
              </div>
              <br />
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
                  <button onClick={() => setIsCloseTime(true)}>
                    Click to confirm
                  </button>
                  {isCloseTime && closeTime.length != 0 && (
                    <Checkmark className="checkmark" size="20px" width="30px" />
                  )}
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
                <button onClick={() => setIsTableCap(true)}>
                  Click to confirm
                </button>
                {isTableCap && tableCap != 0 && (
                  <Checkmark className="checkmark" size="20px" width="30px" />
                )}
              </div>
            </section>

            <section id="submit" className="section">
              <button onClick={handleOnClick} className="submit-button">
                Add your Restaurant
              </button>
            </section>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
