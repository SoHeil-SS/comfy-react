import { useMemo } from "react";

import { useDispatch } from "../../Hooks/useDispatch";

import {
  actionIncAndDecProduct,
  actionFactorVisibility,
  actionClearCarts,
} from "../../StateManagers/syncActions";

import { handleFactorCarts, handleTotalPrice } from "../../Events/others";

import FactorHeader from "../FactorComponents/FactorHeader";
import FactorMapper from "../FactorComponents/FactorMapper";
import FactorFooter from "../FactorComponents/FactorFooter";

const FactorContainer = ({ factorVisibility, factorCarts }) => {
  const dispatch = useDispatch();

  const filteredFactorCarts = useMemo(() => handleFactorCarts(factorCarts), [
    factorCarts,
  ]);

  const totalPrice = useMemo(() => handleTotalPrice(factorCarts), [
    factorCarts,
  ]);

  return (
    <div className={factorVisibility ? " cart-overlay transparentBcg" : ""}>
      <div className={factorVisibility ? "cart showCart" : "cart"}>
        <FactorHeader
          actionFactorVisibility={() => dispatch(actionFactorVisibility())}
        />

        <FactorMapper
          filteredFactorCarts={filteredFactorCarts}
          actionIncAndDecCart={(id, op) =>
            dispatch(actionIncAndDecProduct({ id, op }))
          }
          actionRemoveCart={(id, inCart) =>
            dispatch(actionIncAndDecProduct({ id, op: inCart }))
          }
        />

        <FactorFooter
          actionClearCarts={() => dispatch(actionClearCarts())}
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
