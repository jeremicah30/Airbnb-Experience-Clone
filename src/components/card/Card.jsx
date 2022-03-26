import React from "react";
import "./card.scss";

// import katie from "../../image/katie.png";
import star from "../../image/Star.png";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Katie Zaferes" />

      <div className="card--stats">
        <img src={star} alt="Star Icon" />
        <span className="card--rating">{props.rating}</span>
        <span className="card--reviewCount">({props.reviewCount})</span>
        <span>{props.location}</span>
      </div>

      <div className="card--text">
        <h3>{props.title}</h3>
        <h3>
          <span>${props.price}</span> / person
        </h3>
      </div>
    </div>
  );
};

export default Card;
