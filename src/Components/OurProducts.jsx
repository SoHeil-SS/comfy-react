import React from "react";
import ProductMapper from "./ProductsComponents/ProductMapper";

const OurProducts = ({ products }) => {
  return (
    <section className="products">
      <div className="section-title">
        <h2> Our Products</h2>
      </div>
      <ProductMapper products={products} />
    </section>
  );
};

export default OurProducts;
