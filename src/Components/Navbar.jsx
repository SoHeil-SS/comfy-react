import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  signedUser,
  factorProducts = [],
  handleFactorVisibility,
}) => {
  function basket() {
    let basket = 0;
    factorProducts.forEach((p) => {
      basket += p.inCart;
    });
    return basket;
  }
  return (
    <div style={{ position: "relative" }}>
      <nav className="navbar" style={{ position: "fixed" }}>
        <div className="navbar-center ">
          <span className="nav-icon">
            <Link
              to="/sign"
              className={
                !signedUser ? `btn btn-danger btn-md` : "btn btn-warning btn-md"
              }
              style={{ width: "fit-content", minWidth: "60px" }}
            >
              {signedUser ? signedUser.username : "sign in "}
            </Link>
          </span>
          <img alt="store logo" src="./images/logo.svg"></img>
          <div className="cart-btn">
            <button
              className="nav-icon btn btn-primary   btn-sm"
              style={{ width: "60px", height: "35px" }}
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
