import React from "react";
import { useContext } from "react";
import Contexts from "../../Contexts";

const FactorHeader = () => {
  const { handleFactorVisibility } = useContext(Contexts);
  return (
    <>
      <span className="close-cart">
        <i className="far fa-window-close" onClick={handleFactorVisibility}></i>
      </span>
      <h2>Your Carts</h2>
    </>
  );
};
export default FactorHeader;
