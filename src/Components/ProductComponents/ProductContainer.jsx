import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  handleProductDetail,
  incAndDecProduct,
} from "../../StateManagers/syncActions";

import { handleFindProduct } from "../../Events/others";

import ProductDetails from "./ProductDetails";
import ProductMapper from "./ProductMapper";

const ProductContainer = ({ products, productDetailId }) => {
  const dispatch = useDispatch();

  const product = useMemo(() => handleFindProduct(products, productDetailId), [
    products,
    productDetailId,
  ]);

  return (
    <section className="products">
      <div className="section-title">
        <h2> Our Products</h2>
      </div>
      {product ? (
        <ProductDetails
          product={product}
          handleIncProduct={(id) => dispatch(incAndDecProduct({ id, op: +1 }))}
          handleProductDetail={() => dispatch(handleProductDetail(null))}
        />
      ) : (
        <ProductMapper
          products={products}
          handleProductDetail={(id) => dispatch(handleProductDetail(id))}
          handleIncProduct={(id) => dispatch(incAndDecProduct({ id, op: +1 }))}
        />
      )}
    </section>
  );
};

export default ProductContainer;
