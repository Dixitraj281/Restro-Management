import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./Overview.css";
import Location from "../../../../GoogleMaps/Location";

const Overview = (props) => {
  const { details } = props;

  return (
    <>
      <div className="heading">About this place</div>
      <div className="menu-section">
        <div className="cusine-title">Description</div>
      </div>
      <div className="menucard">
        <div className="menucard-item">
          <div className="desc-img">
            <img
              src={details.desImage}
              alt=""
              className="menu-img"
            />
          </div>
          <div className="desc-text">
            <p>{details.des}</p>
          </div>
        </div>
      </div>

      <div className="cusine-list">
        <p className="cusine-title">Cuisines:</p>
        {details.cusines && details.cusines.length > 0 ? (
          details.cusines.map((cusine, index) => (
            <Button key={index}>{cusine}</Button>
          ))
        ) : (
          <p>No cuisines available</p>
        )}
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
          {details.moreInfo && details.moreInfo.length > 0 ? (
            details.moreInfo.map((info, index) => (
              <ul key={index}><CheckOutlined /> {info}</ul>
            ))
          ) : (
            <p>No additional information available</p>
          )}
        </div>
        <div className="location">
          <p className="address-title">Address:</p>
          <div className="map-div">
            <Location address={details.address} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
