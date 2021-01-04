import { Button } from "react-bootstrap";

const ProductItem = ({
  text,
  price,
  image,
  alt,
  handleIncProduct,
  handleProductDetail,
}) => {
  return (
    <article className="product">
      <div className="img-container">
        <img className="product-img" src={image} alt={alt} />
        <div>
          <Button
            variant="secondary"
            className="detail-btn"
            onClick={handleProductDetail}
          >
            <i className="fas fa-info-circle"></i>
          </Button>

          <Button
            variant="primary"
            className=" add-btn "
            onClick={handleIncProduct}
          >
            <i className="fas fa-shopping-basket"></i>
          </Button>
        </div>
      </div>
      <h3>{text}</h3>
    </article>
  );
};

export default ProductItem;
