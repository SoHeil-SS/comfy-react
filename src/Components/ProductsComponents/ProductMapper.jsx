import React, { useContext } from "react";

import ProductItem from "./ProductItem";
import { incAndDecProduct } from "../../StateManager/actions";
import Contexts from "../../contexts";

const ProductMapper = ({ products }) => {
  const { dispatch } = useContext(Contexts);

  const Products = products.map((product) => {
    const { id, title, price, image, inCart } = product;
    return (
      <ProductItem
        key={id}
        text={title}
        price={price}
        image={image}
        alt={title}
        inCart={inCart}
        handleIncProduct={() => dispatch(incAndDecProduct({ id, op: +1 }))}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
