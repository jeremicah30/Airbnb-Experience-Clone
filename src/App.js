import React from "react";
import "./App.scss";
import cardData from "./cardData";

import { Card, Navbar, Hero } from "./components";
// import katie from "./image/katie.png";

const App = () => {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        title={card.title}
        img={card.coverImg}
        price={card.price}
        location={card.location}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--main card--media">{cardElements}</div>
    </div>
  );
};

export default App;
