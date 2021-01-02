const FactorFooter = ({ handleClear, totalPrice }) => {
  return (
    <div className="cart-footer">
      <h3>
        Your Total : $<span className="cart-total">{totalPrice}</span>
      </h3>
      <button className="clear-cart banner-btn" onClick={handleClear}>
        Clear Carts
      </button>
    </div>
  );
};

export default FactorFooter;
