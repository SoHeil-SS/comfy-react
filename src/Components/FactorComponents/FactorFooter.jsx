import React from "react";
import { useContext } from "react";
import contexts from "../../contexts";

const FactorFooter = () => {
  const { factorProducts, handleClear, openDialog, totalPrice } = useContext(
    contexts
  );

  let btnStyle = null;
  !factorProducts.length
    ? (btnStyle = {
        cursor: "not-allowed ",
        backgroundColor: "lightGray",
        color: "black",
        width: "80%",
        marginTop: "4px",
      })
    : (btnStyle = {
        width: "80%",
        marginTop: "4px",
      });
  return (
    <div className="cart-footer">
      <h3>
        Your Total : $<span className="cart-total">{totalPrice}</span>
      </h3>
      <button
        className="clear-cart banner-btn"
        disabled={!factorProducts.length}
        style={btnStyle}
        onClick={openDialog}
      >
        Buy Carts...!
      </button>
      <button
        className="clear-cart banner-btn"
        disabled={!factorProducts.length}
        style={btnStyle}
        onClick={handleClear}
      >
        Clear Carts
      </button>
    </div>
  );
};

export default FactorFooter;
