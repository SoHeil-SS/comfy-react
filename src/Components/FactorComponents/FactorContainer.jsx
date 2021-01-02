import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  incAndDecProduct,
  handleFactorVisibility,
  handleClearCarts,
} from "../../StateManagers/actions";

import { handleFactorProducts, handleTotalPrice } from "../../Events/others";

import FactorHeader from "./FactorHeader";
import FactorMapper from "./FactorMapper";
import FactorFooter from "./FactorFooter";

const FactorContainer = ({ factorVisibility, products }) => {
  const dispatch = useDispatch();

  const factorProducts = useMemo(() => handleFactorProducts(products), [
    products,
  ]);

  const totalPrice = useMemo(() => handleTotalPrice(factorProducts), [
    factorProducts,
  ]);

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
