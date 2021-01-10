import Loader from "../Others/Loader.jsx";
import { Button } from "react-bootstrap";
import { Img } from "react-image";
import { styles } from "../../Constants/styles.js";

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
        <Img
          className="product-img"
          src={image}
          alt={alt}
          loader={
            <div className="text-center">
              <Loader style={styles.loader.productItem} />
            </div>
          }
        />
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
