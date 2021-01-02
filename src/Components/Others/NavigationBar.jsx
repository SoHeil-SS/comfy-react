import React from "react";
import Navbar from "./Navbar";

function NavigationBar({ basketCount, handleFactorVisibility }) {
  return (
    <Navbar>
      <span className="fa fa-bars"></span>
      <img alt="store logo" src="./images/logo.svg"></img>
      <div className="cart-btn">
        <button
          className="nav-icon btn btn-secondary "
          style={{ width: "60px", height: "43px" }}
          disabled={!basketCount}
          onClick={handleFactorVisibility}
        >
          <i className="fas fa-cart-plus"></i>
        </button>
        <div className="cart-items">{basketCount}</div>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
