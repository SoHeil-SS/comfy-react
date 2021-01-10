const FactorFooter = ({
  totalPrice,
  clearDisabled,
  clearClassName,
  actionClearCarts,
}) => {
  return (
    <div className="cart-footer">
      <h3>
        Your Total : $<span className="cart-total">{totalPrice}</span>
      </h3>
      <button
        className={clearClassName}
        onClick={actionClearCarts}
        disabled={clearDisabled}
      >
        Clear Carts
      </button>
    </div>
  );
};

export default FactorFooter;
