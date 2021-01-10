import { Button } from "react-bootstrap";

const ProductItem = ({
  textContent,
  image,
  alt,
  articleClassName,
  detailBtnClassName,
  detailsContentClassName,
  actionProductDetail,
  actionIncProduct,
}) => {
  return (
    <article className={articleClassName}>
      <div className="img-container">
        <img className="product-img" src={image} alt={alt} />
        <div>
          <Button
            variant="secondary"
            className="bag-btn detail-btn"
            onClick={actionProductDetail}
          >
            <i className={detailBtnClassName}></i>
          </Button>

          <Button
            variant="primary"
            className="bag-btn add-btn "
            onClick={actionIncProduct}
          >
            <i className="fas fa-shopping-basket"></i>
          </Button>
        </div>
      </div>
      <h3 className={detailsContentClassName}>{textContent}</h3>
    </article>
  );
};

export default ProductItem;
