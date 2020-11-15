import React from "react";
import { useContext } from "react";
import Contexts from "../../Contexts";

import ProductItem from "./ProductItem";

const ProductMapper = ({ products }) => {
  const { handleAddProduct, handlePath } = useContext(Contexts);
  const Products = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        text={product.title}
        price={product.price}
        image={product.image}
        alt={product.title}
        to={`/products/${product.title}`}
        handlePath={() => handlePath(product, `/products/${product.title}`)}
        handleAddProduct={() => handleAddProduct(product, product.id)}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
