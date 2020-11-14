import React from "react";

import ProductItem from "./ProductItem";
import Factor from "./Factor";
import Navbar from "./Navbar";

const ProductDetails = ({
  signedUser,
  factorProducts,
  handleAddProduct,
  handleFactorVisibility,
  product,
  handleIncDec,
  handleRemove,
  openDialog,
  totalPrice,
  handleClear,
  handlePath,
  factorVisibility,
}) => {
  return (
    <div>
      <Navbar
        signedUser={signedUser}
        factorProducts={factorProducts}
        handleFactorVisibility={handleFactorVisibility}
      />
      <ProductItem
        text={product.title}
        price={product.title}
        image={product.image}
        alt={product.alt}
        handleAddProduct={() => handleAddProduct(product)}
        path={"/"}
        style={{}}
        handlePath={() => handlePath(product, "/")}
      />
      <Factor
        factorProducts={factorProducts}
        handleIncDec={handleIncDec}
        handleRemove={handleRemove}
        openDialog={openDialog}
        totalPrice={totalPrice}
        handleClear={handleClear}
        factorVisibility={factorVisibility}
        handleFactorVisibility={handleFactorVisibility}
      />
    </div>
  );
};

export default ProductDetails;
