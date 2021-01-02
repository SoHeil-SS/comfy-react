import { useDispatch } from "../../Hooks/useDispatch";

import { incAndDecProduct } from "../../StateManagers/actions";

import ProductMapper from "./ProductMapper";

const ProductContainer = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <section className="products">
      <div className="section-title">
        <h2> Our Products</h2>
      </div>
      <ProductMapper
        products={products}
        handleIncProduct={(id) => dispatch(incAndDecProduct({ id, op: +1 }))}
      />
    </section>
  );
};

export default ProductContainer;
