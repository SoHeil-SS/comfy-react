import React from "react";

import ProductItem from "./ProductItem";
import Factor from "../FactorComponents/Factor";
import Navbar from "../Navbar";
import { useContext } from "react";
import Contexts from "../../Contexts";

const ProductDetails = ({ product }) => {
  const { handleAddProduct, handlePath } = useContext(Contexts);
  return (
    <div>
      <Navbar />
      <ProductItem
        text={product.title}
        price={product.title}
        image={product.image}
        alt={product.alt}
        handleAddProduct={() => handleAddProduct(product)}
        to="/"
        handlePath={() => handlePath(product, "/")}
      />
      <Factor />
    </div>
  );
};

export default ProductDetails;
