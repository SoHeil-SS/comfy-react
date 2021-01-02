import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import { incAndDecProduct } from "../../StateManagers/actions";
import {
  handleFactorVisibility,
  handleClearCarts,
} from "../../StateManagers/actions";

import FactorHeader from "./FactorHeader";
import FactorMapper from "./FactorMapper";
import FactorFooter from "./FactorFooter";
import { handleGetFactorProducts } from "../../Events/others";

const FactorContainer = ({ factorVisibility, products }) => {
  const dispatch = useDispatch();

  const factorProducts = useMemo(() => handleGetFactorProducts(products), [
    products,
  ]);

  const totalPrice = useMemo(() => {
    let total = 0;
    factorProducts.forEach((product) => {
      const { price, inCart } = product;
      total += price * inCart;
    });
    return total;
  }, [factorProducts]);

  return (
    <div className={factorVisibility ? " cart-overlay transparentBcg" : ""}>
      <div className={factorVisibility ? "cart showCart" : "cart"}>
        <FactorHeader
          handleFactorVisibility={() => dispatch(handleFactorVisibility())}
        />

        <FactorMapper
          factorProducts={factorProducts}
          handleIncDecProduct={(id, op) =>
            dispatch(incAndDecProduct({ id, op }))
          }
          handleRemoveProduct={(id, inCart) =>
            dispatch(incAndDecProduct({ id, op: -inCart }))
          }
        />

        <FactorFooter
          handleClearCarts={() => dispatch(handleClearCarts())}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default FactorContainer;
