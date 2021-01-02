import FactorItem from "./FactorItem";

const FactorMapper = ({
  factorProducts,
  handleIncDecProduct,
  handleRemoveProduct,
}) => {
  const Carts = factorProducts.map((product) => {
    const { id, title, image, inCart, price } = product;
    return (
      <FactorItem
        key={id}
        title={title}
        total={price * inCart}
        image={image}
        inCart={inCart}
        handleIncDecProduct={(op) => handleIncDecProduct(id, op)}
        handleRemoveProduct={() => handleRemoveProduct(id, inCart)}
      />
    );
  });
  return <div className="cart-content">{Carts}</div>;
};

export default FactorMapper;
