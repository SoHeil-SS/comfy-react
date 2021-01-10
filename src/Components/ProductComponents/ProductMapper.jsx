import ProductItem from "./ProductItem";

import { fakeDetails } from "../../Constants/variables";

const ProductMapper = ({
  productDetailId,
  products,
  articleClassName,
  detailBtnClassName,
  detailsContentClassName,
  actionProductDetail,
  actionIncAndDecProduct,
}) => {
  const mappedProducts = products.map((product) => {
    const { id, title, image } = product;
    return (
      <ProductItem
        key={id}
        textContent={productDetailId ? fakeDetails : title}
        image={image}
        alt={title}
        articleClassName={articleClassName}
        detailBtnClassName={detailBtnClassName}
        detailsContentClassName={detailsContentClassName}
        actionProductDetail={() =>
          actionProductDetail(productDetailId ? null : id)
        }
        actionIncProduct={() => actionIncAndDecProduct(id)}
      />
    );
  });
  return <div className="products-center">{mappedProducts}</div>;
};

export default ProductMapper;
