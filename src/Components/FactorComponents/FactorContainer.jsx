import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  incAndDecProduct,
  handleFactorVisibility,
  handleClearCarts,
} from "../../StateManagers/actions";

import { handleFactorCarts, handleTotalPrice } from "../../Events/others";

import FactorHeader from "./FactorHeader";
import FactorMapper from "./FactorMapper";
import FactorFooter from "./FactorFooter";

const FactorContainer = ({ factorVisibility, factorCarts }) => {
  const dispatch = useDispatch();

  const filteredFactorProducts = useMemo(() => handleFactorCarts(factorCarts), [
    factorCarts,
  ]);

  console.log(filteredFactorProducts);

  const totalPrice = useMemo(() => handleTotalPrice(factorCarts), [
    factorCarts,
  ]);

  return (
    <div className={factorVisibility ? " cart-overlay transparentBcg" : ""}>
      <div className={factorVisibility ? "cart showCart" : "cart"}>
        <FactorHeader
          handleFactorVisibility={() => dispatch(handleFactorVisibility())}
        />

        <FactorMapper
          filteredFactorProducts={filteredFactorProducts}
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
