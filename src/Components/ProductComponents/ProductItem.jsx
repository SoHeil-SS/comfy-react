const ProductItem = ({ text, price, image, alt, handleIncProduct }) => {
  return (
    <article className="product">
      <div className="img-container">
        <img className="product-img" src={image} alt={alt} />
        <button onClick={handleIncProduct} className="bag-btn">
          {price}
          <i className="fas fa-shopping-cart">Add to cart</i>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <h3>{text}</h3>
    </article>
  );
};

export default ProductItem;
