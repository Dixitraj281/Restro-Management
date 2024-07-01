import React, { useState, useEffect } from "react";
import ImageUpload from "./Admins/Addphotos/ImageUpload.jsx";
import AddCusines from "./Admins/AddCusines/AddCusines.jsx";
import AddFoodPhotos from "./Admins/Addphotos/AddFoodPhotos.jsx";
import AddMenuPhotos from "./Admins/Addphotos/AddMenuPhotos.jsx";
import AddResPhotos from "./Admins/Addphotos/AddResPhotos.jsx";
import { Checkmark } from "react-checkmark";
import Swal from "sweetalert2"
import "./Admin.css";
import axios from "axios";
import AdminHeader from "./Admins/AdminHeader/AdminHeader.jsx";

const Admin = ({ toggleSidebar, isSidebarOpen }) => {
  const [hotelName, setHotelName] = useState("");
  const [isHotelName, setIsHotelName] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescription, setIsDescription] = useState(false);
  const [desImage, setDesImage] = useState([]);
  const [cusines, setCusines] = useState([]);
  const [address, setAddress] = useState("");
  const [isAddress, setIsAddress] = useState(false);
  const [moreInfo, setMoreInfo] = useState([]);
  const [foodImage, setFoodImage] = useState([]);
  const [menuImage, setMenuImage] = useState([]);
  const [resImage, setResImage] = useState([]);
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
    if (
      hotelName.trim() === "" ||
      description.trim() === "" ||
      desImage.length === 0 ||
      cusines.length === 0 ||
      address.trim() === "" ||
      moreInfo.length === 0 ||
      foodImage.length === 0 ||
      menuImage.length === 0 ||
      resImage.length === 0 ||
      openTime.trim() === "" ||
      closeTime.trim() === "" ||
      tableCap === 0
    ) {
      Swal.fire('Error!', 'Please fill out all the fields.', 'error');
      return;
    }

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
        if (num === 1) {
          setDesUrls(temp);
          setDesLoad(true);
        } else if (num === 2) {
          setFoodUrls(temp);
          setFoodLoad(true);
        } else if (num === 3) {
          setMenuUrls(temp);
          setMenuLoad(true);
        } else if (num === 4) {
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

      Swal.fire('Success!', 'Your Restaurant details have been submitted.', 'success');

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
    <div className="admin-container"> 
      <div className="admin-main-content">
        <div className={`content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
        <AdminHeader toggleSidebar={toggleSidebar}/>
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
              <button onClick={() => setIsHotelName(true)}>Confirm</button>
              {isHotelName && hotelName.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
            </div>
          </section>

          <section className="section">
            <h1>Enter description</h1>
            <textarea
              required
              className="input-field"
              placeholder="Enter Restaurant's Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="Buttons">
              <button onClick={() => setIsDescription(true)}>Confirm</button>
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
              <button onClick={() => setIsAddress(true)}>Confirm</button>
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
                <button onClick={() => setIsOpenTime(true)}>Confirm</button>
                {isOpenTime && openTime.length !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
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
                <button onClick={() => setIsCloseTime(true)}>Confirm</button>
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
              <button onClick={() => setIsTableCap(true)}>Confirm</button>
              {isTableCap && tableCap !== 0 && <Checkmark className="checkmark" size="20px" width="30px" />}
            </div>
          </section>

          <section id="submit" className="section">
            <button onClick={handleOnClick} className="submit-button">Add your Restaurant</button>
          </section>
          <br />
        </div>
      </div>
    </div>

  );
};

export default Admin;
