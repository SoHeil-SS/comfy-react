import FactorItem from "./FactorItem";

const FactorMapper = ({
  filteredFactorCarts,
  actionIncAndDecCart,
  actionRemoveCart,
}) => {
  const mappedFactorCarts = filteredFactorCarts.map((cart) => {
    const { id, title, image, inCart, price } = cart;
    return (
      <FactorItem
        key={id}
        title={title}
        total={price * inCart}
        image={image}
        inCart={inCart}
        actionIncCart={() => actionIncAndDecCart(id, +1)}
        actionDecCart={() => actionIncAndDecCart(id, -1)}
        actionRemoveCart={() => actionRemoveCart(id, -inCart)}
      />
    );
  });
  return <div className="cart-content">{mappedFactorCarts}</div>;
};

export default FactorMapper;
