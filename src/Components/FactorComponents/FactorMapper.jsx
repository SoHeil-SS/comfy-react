import { useContext } from "react";

import Contexts from "../../contexts";
import { incAndDecProduct } from "../../StateManager/actions";

import FactorItem from "./FactorItem";

const FactorMapper = () => {
  const { factorProducts, dispatch } = useContext(Contexts);
  const Carts = factorProducts.map((product) => {
    const { id, title, image, inCart } = product;
    return (
      <FactorItem
        key={id}
        title={title}
        total={product.price * product.inCart}
        image={image}
        inCart={inCart}
        handleIncDecProduct={(op) => dispatch(incAndDecProduct({ id, op }))}
        handleRemoveProduct={() =>
          dispatch(incAndDecProduct({ id, op: -inCart }))
        }
      />
    );
  });
  return <div className="cart-content">{Carts}</div>;
};

export default FactorMapper;
