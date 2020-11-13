import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ProductDetails = ({
  signedUser,
  factorProducts,
  handleAddProduct,
  handleFactorVisibility,
  product,
}) => {
  return (
    <div>
      <Navbar
        signedUser={signedUser}
        factorProducts={factorProducts}
        handleFactorVisibility={handleFactorVisibility}
      />

      <article className="product">
        <div className="img-container">
          <Link to="/">
            <img
              className="product-img"
              src={product.image}
              alt={product.alt}
            />
          </Link>
          <button
            onClick={() => handleAddProduct(product, product.id)}
            className="bag-btn"
          >
            {product.price}
            <i className="fas fa-shopping-cart">Add to cart</i>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        <h3>{product.title}</h3>
      </article>
    </div>
  );
};

export default ProductDetails;
