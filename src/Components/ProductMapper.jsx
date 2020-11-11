import React from "react";

import ProductItem from "./ProductItem";

const ProductMapper = ({ products, handleAddProduct }) => {
  const Products = products.map((p) => {
    return (
      <ProductItem
        key={p.id}
        title={p.title}
        price={p.price}
        image={p.image}
        alt={p.title}
        handleAddProduct={() => handleAddProduct(p, p.id)}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
