import React from "react";
import { useContext } from "react";

import contexts from "../../contexts";

import Navbar from "../Navbar";
import FactorContent from "../FactorComponents/FactorContent";
import ProductItem from "./ProductItem";

const ProductDetails = ({ product }) => {
  const { handleAddProduct, handlePath } = useContext(contexts);
  return (
    <div>
      <Navbar />
      <FactorContent />
      <ProductItem
        text={product.title}
        price={product.title}
        image={product.image}
        alt={product.alt}
        handleAddProduct={() => handleAddProduct(product, product.id)}
        to="/"
        handlePath={() => handlePath(product, "/")}
      />
    </div>
  );
};

export default ProductDetails;
