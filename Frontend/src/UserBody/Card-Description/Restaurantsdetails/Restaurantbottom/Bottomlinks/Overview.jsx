import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./Overview.css";
import Location from "../../../../GoogleMaps/Location";

const Overview = () => {
  return (
    <>
      <div className="heading">About this place</div>
      <div className="menu-section">
        <div className="cusine-title">Description</div>
      </div>
      <div class="menucard">
        <div class="menucard-item">
          <div class="desc-img">
            <img
              src="https://b.zmtcdn.com/data/pictures/8/21047068/167cf0889cfdbd49fc459ca0bc77e1ea_featured_v2.jpg?output-format=webp"
              alt=""
              class="menu-img"
            />
          </div>
          <div class="desc-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              provident tenetur, distinctio necessitatibus ad, neque magnam
              nobis velit rerum reprehenderit molestiae facilis ducimus officiis
              omnis eaque praesentium cum tempore, nemo doloribus quo facere
              repellendus dolorem. Doloribus nam eligendi tenetur. Assumenda
              unde itaque fuga aut quod autem eum ducimus, magni, voluptatum
              iusto explicabo accusamus?
            </p>
          </div>
        </div>
      </div>

      <div className="cusine-list">
        <p className="cusine-title">Cusines:</p>
        <Button>Continental</Button>
        <Button>European</Button>
        <Button>Asian</Button>
        <Button>Chinese</Button>
        <Button>North Indian</Button>
        <Button>South Indian</Button>
        <Button>Seafood</Button>
      </div>
      <div className="avgcost">
        <p className="avgcost-title">Average Cost</p>
        <p className="pricingfortwo">
          ₹1,500 for two people (approx.) with alcohol
        </p>
        <p className="tax-charges">
          Exclusive of applicable taxes and charges, if any
        </p>
        <p className="tooltip disclaimer">
          How do we calculate cost for two?
          <span className="tooltiptext">
            This is a brief description of the calculation method for the cost
            of two people.
          </span>
        </p>
      </div>
      <div className="moreinfo-location">
        <div className="moreinfo">
          <p className="moreinfo-title">More Info</p>
          <ul>
            <CheckOutlined /> Takeaway Available
          </ul>
          <ul>
            <CheckOutlined /> Craft Beer
          </ul>
          <ul>
            <CheckOutlined /> Table booking recommended
          </ul>
          <ul>
            <CheckOutlined /> Pet Friendly
          </ul>
          <ul>
            <CheckOutlined /> Outdoor Seating
          </ul>
          <ul>
            <CheckOutlined /> Live Sports Screening
          </ul>
          <ul>
            <CheckOutlined /> Full Bar Available
          </ul>
          <ul>
            <CheckOutlined /> Smoking Area
          </ul>
          <ul>
            <CheckOutlined /> Valet Parking Available
          </ul>
          <ul>
            <CheckOutlined /> Indoor Seating
          </ul>
          <ul>
            <CheckOutlined /> Family Friendly
          </ul>
          <ul>
            <CheckOutlined /> LGBTQIA Friendly
          </ul>
        </div>
        <div className="location">
          <p className="address-title">Address:</p>
          <div className="address">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            quasi commodi. Ut sapiente exercitationem aliquid totam. Ipsum
            cumque nobis iste?
          </div>
          <div className="map-div">
            <Location />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
