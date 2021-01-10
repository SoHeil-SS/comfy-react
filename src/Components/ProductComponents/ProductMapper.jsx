import ProductItem from "./ProductItem";

const ProductMapper = ({
  products,
  actionProductDetail,
  actionIncAndDecProduct,
}) => {
  const Products = products.map((product) => {
    const { id, title, image } = product;
    return (
      <ProductItem
        key={id}
        title={title}
        image={image}
        alt={title}
        articleClassName="product"
        detailBtnClassName="fas fa-info-circle"
        handleProductDetail={() => actionProductDetail(id)}
        handleIncProduct={() => actionIncAndDecProduct(id)}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
