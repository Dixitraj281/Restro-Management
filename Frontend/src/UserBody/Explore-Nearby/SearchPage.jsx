import React from 'react';
import './SearchPage.css';
import SearchResult from "./SearchResult.jsx";
import cardData from '../Carddata.json';
import { Button } from "antd";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Restaurants nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <div className='searchpage__card'>
            {cardData.map((card, index) => (
            <SearchResult
                key={index}
                src={card.src}
                location={card.location}
                title={card.title}
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price={card.price}
                total="£117 total"
            />
            ))}
            </div>
        </div>
    )
}

export default SearchPage
