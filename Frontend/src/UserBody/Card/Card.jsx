import {React} from "react";
import {Link} from 'react-router-dom'
import "./Card.css";

function Card({ src, title, cusine, price, location, opentime, closetime }) {
  return (
    <Link className="card" to='/info'>
      <img src={src} alt="" className="card-img" />
      <div className="card__info">
        <div class="card-section">
          <h4 class="hArupt">{title}</h4>
          <div class="sc-ljUfdc kDXOLl">
            <div class="sc-1q7bklc-5 kHxpSk">
              <div
                color="#267E3E"
                height="2rem"
                width="2.6rem"
                font-size="1.3rem"
                class="sc-1q7bklc-10 gJgFjE"
              >
                <div class="sc-1q7bklc-6 liCXOR">
                  <div class="sc-1q7bklc-5 kHxpSk">
                    <div class="sc-1q7bklc-2 pxJGx">
                      <i class="sc-rbbb40-1 iFnyeo" color="#FFFFFF">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFFFFF"
                          width="0.8rem"
                          height="0.8rem"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                          class="sc-rbbb40-0 fauQLv"
                        >
                          <title>star-fill</title>
                          <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-section">
          <p class="sc-1hez2tp-0 sc-iEPtyo bHxcOC">{cusine}</p>
          <p class="sc-1hez2tp-0 sc-iEPtyo dJHUYi">{price}</p>
        </div>
        <div class="card-section">
          <p class="card-location">{location}</p>
          <p class="card-km">1.7 km</p>
        </div>
        <hr/>
        <div className="card-section">
        <h3 className="card__opentime">{opentime}</h3>
        <h3 className="card__closetime">{closetime}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
