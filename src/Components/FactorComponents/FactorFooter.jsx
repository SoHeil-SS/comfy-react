const FactorFooter = ({
  handleClearCarts,
  totalPrice,
  clearDisabled,
  clearClassName,
}) => {
  return (
    <div className="cart-footer">
      <h3>
        Your Total : $<span className="cart-total">{totalPrice}</span>
      </h3>
      <button
        className={clearClassName}
        onClick={handleClearCarts}
        disabled={clearDisabled}
      >
        Clear Carts
      </button>
    </div>
  );
};

export default FactorFooter;
