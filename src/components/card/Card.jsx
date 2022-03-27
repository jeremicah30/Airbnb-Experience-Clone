import React from "react";
import "./card.scss";

// import katie from "../../image/katie.png";
import star from "../../image/Star.png";

const Card = (props) => {
  // console.log(props.card);
  let badgeText;
  if (props.card.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--spot">{badgeText}</div>}
      <img src={props.card.coverImg} alt="Katie Zaferes" />

      <div className="card--stats">
        <img src={star} alt="Star Icon" />
        <span className="card--rating">{props.card.stats.rating}</span>
        <span className="card--reviewCount">
          ({props.card.stats.reviewCount})
        </span>
        <span>{props.card.location}</span>
      </div>

      <div className="card--text">
        <h3>{props.card.title}</h3>
        <h3>
          <span>${props.card.price}</span> / person
        </h3>
      </div>
    </div>
  );
};

export default Card;
