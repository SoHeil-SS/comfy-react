import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  actionProductDetail,
  actionIncAndDecProduct,
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
          actionIncAndDecProduct={(id) =>
            dispatch(actionIncAndDecProduct({ id, op: +1 }))
          }
          actionProductDetail={() => dispatch(actionProductDetail(null))}
        />
      ) : (
        <ProductMapper
          products={products}
          actionProductDetail={(id) => dispatch(actionProductDetail(id))}
          actionIncAndDecProduct={(id) =>
            dispatch(actionIncAndDecProduct({ id, op: +1 }))
          }
        />
      )}
    </section>
  );
};

export default ProductContainer;
