import FactorItem from "./FactorItem";

const FactorMapper = ({
  filteredFactorProducts,
  handleIncDecCart,
  handleRemoveCart,
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
        handleIncCart={() => handleIncDecCart(id, +1)}
        handleDecCart={() => handleIncDecCart(id, -1)}
        handleRemoveCart={() => handleRemoveCart(id, inCart)}
      />
    );
  });
  return <div className="cart-content">{Carts}</div>;
};

export default FactorMapper;
