import React from 'react';
import './Home.css';
import Banner from './Home-Banner/Banner.jsx'
import cardData from './Carddata.json';
import Card from './Card/Card.jsx' 
import Chooseus from './Home-Banner/Chooseus.jsx';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <Chooseus/>
            <h1>Bangalore Restaurants</h1>
            <div className='home__section'>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    src={card.src}
                    title={card.title}
                    cusine={card.cusine}
                    price={card.price}
                    location={card.location}
                    opentime={card.opentime}
                    closetime={card.closetime}
                />
            ))}
        </div>
        </div>
    )
}

export default Home
