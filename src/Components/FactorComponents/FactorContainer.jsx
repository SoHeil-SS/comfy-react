import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  actionIncAndDecProduct,
  actionFactorVisibility,
  actionClearCarts,
} from "../../StateManagers/syncActions";

import { handleFactorCarts, handleTotalPrice } from "../../Events/others";

import FactorHeader from "./FactorHeader";
import FactorMapper from "./FactorMapper";
import FactorFooter from "./FactorFooter";

const FactorContainer = ({ factorVisibility, factorCarts }) => {
  const dispatch = useDispatch();

  const filteredFactorProducts = useMemo(() => handleFactorCarts(factorCarts), [
    factorCarts,
  ]);

  const totalPrice = useMemo(() => handleTotalPrice(factorCarts), [
    factorCarts,
  ]);

  return (
    <div className={factorVisibility ? " cart-overlay transparentBcg" : ""}>
      <div className={factorVisibility ? "cart showCart" : "cart"}>
        <FactorHeader
          handleFactorVisibility={() => dispatch(actionFactorVisibility())}
        />

        <FactorMapper
          filteredFactorProducts={filteredFactorProducts}
          handleIncDecCart={(id, op) =>
            dispatch(actionIncAndDecProduct({ id, op }))
          }
          handleRemoveCart={(id, inCart) =>
            dispatch(actionIncAndDecProduct({ id, op: -inCart }))
          }
        />

        <FactorFooter
          handleClearCarts={() => dispatch(actionClearCarts())}
          totalPrice={totalPrice}
          clearDisabled={!totalPrice}
          clearClassName={
            totalPrice ? "clear-cart banner-btn" : "clear-btn-disabled"
          }
        />
      </div>
    </div>
  );
};

export default FactorContainer;
