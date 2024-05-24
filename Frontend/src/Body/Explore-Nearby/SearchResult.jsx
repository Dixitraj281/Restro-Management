import React from 'react';
import './SearchResult.css';

function SearchResult({
    src,
    location,
    title,
    description,
    star,
    total,
}) {
    return (
        <div className='searchResult'>
            <img src={src} alt="" className='searchResult__img'/>
            {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        {/* <StarIcon className="searchResult__star" /> */}
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
