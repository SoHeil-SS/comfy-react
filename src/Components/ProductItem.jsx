import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  title,
  price,
  image,
  alt,
  product,
  handleAddProduct,
  handlePath,
}) => {
  return (
    <article className="product">
      <div className="img-container">
        <Link to={`/products/${title}`}>
          <img
            className="product-img"
            src={image}
            alt={alt}
            onClick={handlePath}
          />
        </Link>
        <button onClick={() => handleAddProduct(product)} className="bag-btn">
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
