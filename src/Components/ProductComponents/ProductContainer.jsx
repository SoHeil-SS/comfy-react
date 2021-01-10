import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
<<<<<<< HEAD
  actionProductDetail,
  actionIncAndDecProduct,
=======
  handleProductDetail,
  handleIncAndDecProduct,
>>>>>>> 0e7b22be16da8bacf1b42017b001b0166a049043
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
          handleIncProduct={(id) =>
<<<<<<< HEAD
            dispatch(actionIncAndDecProduct({ id, op: +1 }))
          }
          handleProductDetail={() => dispatch(actionProductDetail(null))}
=======
            dispatch(handleIncAndDecProduct({ id, op: +1 }))
          }
          handleProductDetail={() => dispatch(handleProductDetail(null))}
>>>>>>> 0e7b22be16da8bacf1b42017b001b0166a049043
        />
      ) : (
        <ProductMapper
          products={products}
<<<<<<< HEAD
          handleProductDetail={(id) => dispatch(actionProductDetail(id))}
          handleIncProduct={(id) =>
            dispatch(actionIncAndDecProduct({ id, op: +1 }))
=======
          handleProductDetail={(id) => dispatch(handleProductDetail(id))}
          handleIncProduct={(id) =>
            dispatch(handleIncAndDecProduct({ id, op: +1 }))
>>>>>>> 0e7b22be16da8bacf1b42017b001b0166a049043
          }
        />
      )}
    </section>
  );
};

export default ProductContainer;
