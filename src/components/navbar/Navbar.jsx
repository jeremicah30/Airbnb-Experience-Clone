import React from "react";
import "./navbar.scss";
import AirbnbLogo from "../../image/airbnb.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={AirbnbLogo} alt="Airbnb Logo" />
    </div>
  );
};

export default Navbar;
