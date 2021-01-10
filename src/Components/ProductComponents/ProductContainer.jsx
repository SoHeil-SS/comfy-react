import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  actionProductDetail,
  actionIncAndDecProduct,
} from "../../StateManagers/syncActions";

import { handleFindProductAndDetails } from "../../Events/others";

import ProductMapper from "./ProductMapper";

const ProductContainer = ({ products, productDetailId }) => {
  const dispatch = useDispatch();

  const { product, classNames } = useMemo(
    () => handleFindProductAndDetails(products, productDetailId),
    [products, productDetailId]
  );

  return (
    <section className="products">
      <div className="section-title">
        <h2> Our Products</h2>
      </div>

      <ProductMapper
        productDetailId={productDetailId}
        products={product.length ? product : products}
        articleClassName={classNames.article}
        detailBtnClassName={classNames.btn}
        detailsContentClassName={classNames.detailContent}
        actionProductDetail={(id) => dispatch(actionProductDetail(id))}
        actionIncAndDecProduct={(id) =>
          dispatch(actionIncAndDecProduct({ id, op: +1 }))
        }
      />
    </section>
  );
};

export default ProductContainer;
