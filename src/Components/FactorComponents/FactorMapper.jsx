import FactorItem from "./FactorItem";

const FactorMapper = ({
  filteredFactorProducts,
  handleIncDecProduct,
  handleRemoveProduct,
}) => {
  const Carts = filteredFactorProducts.map((cart) => {
    const { id, title, image, inCart, price } = cart;
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
