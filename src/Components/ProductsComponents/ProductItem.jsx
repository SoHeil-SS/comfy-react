import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  text,
  price,
  image,
  alt,
  handleAddProduct,
  to,
  style,
  handlePath,
}) => {
  return (
    <article className="product">
      <div className="img-container">
        <Link to={to}>
          <img
            style={style && style.img}
            className="product-img"
            src={image}
            alt={alt}
            onClick={handlePath}
          />
        </Link>
        <button onClick={handleAddProduct} className="bag-btn">
          {price}
          <i className="fas fa-shopping-cart">Add to cart</i>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <h3 style={style && style.text}>{text}</h3>
    </article>
  );
};

export default ProductItem;
