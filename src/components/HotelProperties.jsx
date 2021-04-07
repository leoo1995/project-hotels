import React from "react";
import room from "../icons/bed.svg";
import location from "../icons/pin.png";
import "../sass/HotelProperties.scss";
import setPrice from "../functions/setPrice.js";
const HotelProperties = props => {
  return (
    <div className="properties">
      <div className="location">
        <img className="icon" src={location} alt="room" />
        <span>
          {props.city}, {props.country}
        </span>
      </div>
      <div className="room">
        <img className="icon" src={room} alt="location" />
        <span>{props.rooms}</span>
      </div>
      <div className="price">{setPrice(props.price)}</div>
    </div>
  );
};

export default HotelProperties;
