import ProductItem from "./ProductItem";

const ProductMapper = ({ products, handleIncProduct }) => {
  const Products = products.map((product) => {
    const { id, title, price, image, inCart } = product;
    return (
      <ProductItem
        key={id}
        text={title}
        price={price}
        image={image}
        alt={title}
        handleIncProduct={() => handleIncProduct(id)}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
