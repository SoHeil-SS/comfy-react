import React from "react";

import ProductItem from "./ProductItem";

const ProductMapper = ({ products, handleAddProduct, handlePath }) => {
  const Products = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        alt={product.title}
        product={product}
        handlePath={() => handlePath(product, product.title)}
        handleAddProduct={(product) => handleAddProduct(product, product.id)}
      />
    );
  });
  return <div className="products-center">{Products}</div>;
};

export default ProductMapper;
