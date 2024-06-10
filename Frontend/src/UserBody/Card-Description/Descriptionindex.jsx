import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/carousel.jsx';
import Images from '../images.js'
import "./Descriptionindex.css"
import Restaurantdetails from './Restaurantsdetails/Restaurantdetails.jsx';
import Bottomnav from './Restaurantsdetails/Restaurantbottom/Bottomnav.jsx';
import { Route, Routes } from 'react-router-dom';
import Overview from './Restaurantsdetails/Restaurantbottom/Bottomlinks/Overview.jsx'
import Photos from './Restaurantsdetails/Restaurantbottom/Bottomlinks/Photos.jsx'
import Menu from './Restaurantsdetails/Restaurantbottom/Bottomlinks/Menu.jsx'
import BookTable from './Restaurantsdetails/Restaurantbottom/Bottomlinks/BookTable.jsx';





const Descriptionindex = () => {
  
  const sendRequestToBackend = async()=>{
    try{
    const response = await fetch("http://localhost:4500/admin/getResData/Udupi", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const data = await response.json();
        return data;
    }
    catch(err){
      console.log(err);
    }
  }
  
  const requestForData = async(e)=>{
    try{
    const res = await sendRequestToBackend();
      console.log(res);
   }
    catch(err){
      console.log("Error while fetching data");
    }
  }
 
  useEffect(()=>{
    requestForData();

  },[]);
 
 

  return (
    <>
    <div className='carousel-div'>
      <Carousel images={Images}/>
      <Restaurantdetails/>
      <Bottomnav/>
      <div className="content-div">
          <Routes>
            <Route path="overview" element={<Overview />} />
            <Route path="photos" element={<Photos />} />
            <Route path="menu" element={<Menu />} />
            <Route path="book" element={<BookTable />} />
          </Routes>
        </div>
    </div>
    </>
  );
};

export default Descriptionindex;
