import React from "react";

const Navbar = ({ factorProducts, handleFactorVisibility }) => {
  function basket() {
    let basket = 0;
    factorProducts.forEach((p) => {
      basket += p.inCart;
    });
    return basket;
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-center ">
          <span className="nav-icon">
            <i className="fas fa-bars"></i>
          </span>
          <img alt="store logo" src="./images/logo.svg"></img>
          <div className="cart-btn">
            <button
              className="nav-icon"
              disabled={!basket()}
              onClick={handleFactorVisibility}
            >
              <i className="fas fa-cart-plus"></i>
            </button>
            <div className="cart-items">{basket()}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
