import ProductItem from "./ProductItem";

import { details } from "../../Constants/variables";

function ProductDetails({ product, handleIncProduct, handleProductDetail }) {
  const { id, title, image } = product;
  return (
    <ProductItem
      image={image}
      alt={title}
      details={details}
      detailsContentClassName="details-content"
      articleClassName="article-detail"
      detailBtnClassName="fas fa-arrow-alt-circle-left"
      handleIncProduct={() => handleIncProduct(id)}
      handleProductDetail={handleProductDetail}
    />
  );
}

export default ProductDetails;
