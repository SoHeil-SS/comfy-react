import ProductItem from "./ProductItem";

const ProductMapper = ({ products, handleProductDetail, handleIncProduct }) => {
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
        handleProductDetail={() => handleProductDetail(id)}
        handleIncProduct={() => handleIncProduct(id)}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
