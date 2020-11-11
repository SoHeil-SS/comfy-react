import React from "react";

const ProductItem = ({ title, price, image, alt, handleAddProduct }) => {
  return (
    <article className="product">
      <div className="img-container">
        <img
          className="product-img"
          src={image}
          //"src content should be set with public folder address . "
          alt={alt}
        />
        <button onClick={handleAddProduct} className="bag-btn">
          {price}
          <i className="fas fa-shopping-cart">Add to cart</i>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <h3>{title}</h3>
    </article>
  );
};

export default ProductItem;
