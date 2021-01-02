import { Button } from "react-bootstrap";

import Navbar from "./Navbar";

function NavigationBar({ basketCount, handleFactorVisibility }) {
  return (
    <Navbar>
      <Button variant="dark" disabled>
        <span className="fa fa-bars"></span>
      </Button>
      <img alt="store logo" src="./images/logo.svg"></img>
      <div className="cart-btn">
        <Button
          className=" btn-dark btn-lg nav-icon "
          disabled={!basketCount}
          onClick={handleFactorVisibility}
        >
          <i className="fas fa-cart-plus"></i>
        </Button>
        <div className="cart-items">{basketCount}</div>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
