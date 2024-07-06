import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/carousel.jsx';
import "./Descriptionindex.css";
import Restaurantdetails from './Restaurantsdetails/Restaurantdetails.jsx';
import Bottomnav from './Restaurantsdetails/Restaurantbottom/Bottomnav.jsx';
import { Navigate, Route, Routes,useParams } from 'react-router-dom';
import Overview from './Restaurantsdetails/Restaurantbottom/Bottomlinks/Overview.jsx';
import Photos from './Restaurantsdetails/Restaurantbottom/Bottomlinks/Photos.jsx';
import Menu from './Restaurantsdetails/Restaurantbottom/Bottomlinks/Menu.jsx';
import BookTable from './Restaurantsdetails/Restaurantbottom/Bottomlinks/BookTable.jsx';

const Descriptionindex = () => {
  
  const [resData, setResData] = useState({});
  const { restaurantName } = useParams();

  console.log(restaurantName);
  const sendRequestToBackend = async () => {
    try {
      const response = await fetch(`http://localhost:4500/admin/getResData/${restaurantName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResData(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const requestForData = async (resname) => {
    try {
      const res = await sendRequestToBackend(resname);
      console.log(res);
    } catch (err) {
      console.log("Error while fetching data");
    }
  };

  useEffect(() => {
    requestForData();
  }, [restaurantName]);

  useEffect(() => {
    setResData(resData);
  }, [resData]);

  // Extract desImage array
  const desImages = resData.resPhotos ? resData.resPhotos.map((url, index) => ({ id: index, src: url, alt: `Image ${index}` })) : [];
  // Extract foodPhotos array
  const foodPhotos = resData.foodPhotos ? resData.foodPhotos.map((url, index) => ({ id: index, src: url, alt: `Image ${index}` })) : [];
  // Extract MenuPhoto array
  const MenuPhoto = resData.menuPhotos ? resData.menuPhotos.map((url, index) => ({ id: index, src: url, alt: `Image ${index}` })) : [];

  return (
    <>
      <div className='carousel-div'>
        <Carousel images={desImages} />
        <Restaurantdetails details={resData} />
        <Bottomnav />
        <div className="content-div">
          <Routes>
            <Route path="/" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview details={resData}/>} />
            <Route path="photos" element={<Photos photo={foodPhotos}/>} />
            <Route path="menu" element={<Menu menu ={MenuPhoto}/>} />
            <Route path="book" element={<BookTable />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Descriptionindex;
