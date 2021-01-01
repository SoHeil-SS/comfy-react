import React from "react";

const ProductItem = ({
  text,
  price,
  image,
  alt,
  inCart,
  content,
  productStyle,
  handleIncProduct,
}) => {
  return (
    <article className="product">
      <div className="img-container" style={productStyle && productStyle.div}>
        <img
          style={productStyle && productStyle.img}
          className="product-img"
          src={image}
          alt={alt}
        />
        <button
          style={productStyle && productStyle.button}
          onClick={handleIncProduct}
          className="bag-btn"
        >
          {price}
          <i className="fas fa-shopping-cart">Add to cart</i>
          <i className="fas fa-shopping-cart">{inCart && inCart}</i>
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
