import React from "react";

const FactorProduct = ({
  title,
  total,
  image,
  inCart,
  handleIncDec,
  handleRemove,
}) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title} </h4>
        <h5>{total}</h5>
        <span className="remove-item" onClick={handleRemove}>
          Remove
        </span>
      </div>
      <div>
        <i className="fas fa-chevron-up" onClick={() => handleIncDec(+1)} />
        <p className="item-amount">{inCart}</p>
        <i className="fas fa-chevron-down" onClick={() => handleIncDec(-1)} />
      </div>
    </div>
  );
};

export default FactorProduct;
