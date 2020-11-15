import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  text,
  price,
  image,
  alt,
  to,
  content,
  productStyle,
  handleAddProduct,
  handlePath,
}) => {
  return (
    <article className="product">
      <div className="img-container" style={productStyle && productStyle.div}>
        <Link to={to}>
          <img
            style={productStyle && productStyle.img}
            className="product-img"
            src={image}
            alt={alt}
            onClick={handlePath}
          />
        </Link>
        <button
          style={productStyle && productStyle.button}
          onClick={handleAddProduct}
          className="bag-btn"
        >
          {price}
          <i className="fas fa-shopping-cart">Add to cart</i>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <h3 style={productStyle && productStyle.text}>{text}</h3>
      {content && (
        <div style={{ padding: "10px" }}>
          <h4>{text}</h4>
          <div>
            <h6>{content}</h6>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProductItem;
