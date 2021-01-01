import { useContext } from "react";

import { handleFactorVisibility } from "../StateManager/actions";
import Contexts from "../contexts";

const Navbar = () => {
  const { factorProducts, dispatch } = useContext(Contexts);

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
          <span className="nav-icon"></span>
          <img alt="store logo" src="./images/logo.svg"></img>
          <div className="cart-btn">
            <button
              className="nav-icon btn btn-primary   btn-sm"
              style={{ width: "60px", height: "35px" }}
              disabled={!basket()}
              onClick={() => dispatch(handleFactorVisibility())}
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
