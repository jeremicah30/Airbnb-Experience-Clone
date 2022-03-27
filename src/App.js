import React from "react";
import "./App.scss";
import cardData from "./cardData";

import { Card, Navbar, Hero } from "./components";
// import katie from "./image/katie.png";

const App = () => {
  const cardElements = cardData.map((card) => {
    return <Card key={card.id} card={card} />;
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
