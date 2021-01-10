import ProductItem from "./ProductItem";

const ProductMapper = ({
  products,
  articleClassName,
  detailBtnClassName,
  detailsContentClassName,
  actionProductDetail,
  actionIncAndDecProduct,
}) => {
  const mappedProducts = products.map((product) => {
    const { id, textContent, image } = product;
    return (
      <ProductItem
        key={id}
        textContent={textContent}
        image={image}
        alt={textContent}
        articleClassName={articleClassName}
        detailBtnClassName={detailBtnClassName}
        detailsContentClassName={detailsContentClassName}
        actionProductDetail={() => actionProductDetail(id)}
        actionIncProduct={() => actionIncAndDecProduct(id)}
      />
    );
  });
  return <div className="products-center">{mappedProducts}</div>;
};

export default ProductMapper;
