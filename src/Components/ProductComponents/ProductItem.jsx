import { Button } from "react-bootstrap";

const ProductItem = ({
  title,
  details,
  image,
  alt,
  articleClassName,
  detailBtnClassName,
  detailsContentClassName,
  handleIncProduct,
  handleProductDetail,
}) => {
  return (
    <article className={articleClassName}>
      <div className="img-container">
        <img className="product-img" src={image} alt={alt} />
        <div>
          <Button
            variant="secondary"
            className="bag-btn detail-btn"
            onClick={handleProductDetail}
          >
            <i className={detailBtnClassName}></i>
          </Button>

          <Button
            variant="primary"
            className="bag-btn add-btn "
            onClick={handleIncProduct}
          >
            <i className="fas fa-shopping-basket"></i>
          </Button>
        </div>
      </div>
      <p className={detailsContentClassName}>{details}</p>
      <h3>{title}</h3>
    </article>
  );
};

export default ProductItem;
