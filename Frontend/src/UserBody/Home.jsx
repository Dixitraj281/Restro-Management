import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from './Home-Banner/Banner.jsx'
import Card from './Card/Card.jsx' 
import Chooseus from './Home-Banner/Chooseus.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
    const[resCol, setResCol]= useState([]);
    const navigate = useNavigate();
    const resData = async()=>{
        try {
            const response = await fetch("http://localhost:4500/getAllRes", {
              method: "GET"
            });
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            await setResCol(data);
            return {
                success: true,
            };
          } catch (error) {
            return {
              success: false,
              error: error.message,
            };
          }

    }
    useEffect(()=>{
        resData();
        console.log("Data came into picture");
    },[]);
    useEffect(()=>{
        setResCol(resCol);
    },[resCol]);
    const showRes = (resname)=>{
        console.log("hello")



    }
    return (
        <div className='home'>
            <Banner />
            <Chooseus/>
            <h1>Bangalore Restaurants</h1>
            <div className='home__section'>
            {resCol.map((card, index) => (
                <Card 
                    key={index}
                    res_name={card.res_name}
                    optime={card.openTime}
                    cltime={card.closeTime}
                    img={card.resPhotos[0]}


                />
            ))}
        </div>
        </div>
    )
}

export default Home
