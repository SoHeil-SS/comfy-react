import { useContext, useMemo } from "react";

import Contexts from "../../contexts";

import {
  handleFactorVisibility,
  handleClearProducts,
} from "../../StateManager/actions";

import FactorHeader from "./FactorHeader";
import FactorMapper from "./FactorMapper";
import FactorFooter from "./FactorFooter";

const FactorContent = () => {
  const { factorVisibility, factorProducts, dispatch } = useContext(Contexts);

  const totalPrice = useMemo(() => {
    let total = 0;
    factorProducts.forEach((product) => {
      const { price, inCart } = product;
      total += price * inCart;
    });
    return total;
  }, [factorProducts]);

  return (
    <div className={factorVisibility && " cart-overlay transparentBcg"}>
      <div className={factorVisibility ? "cart showCart" : "cart"}>
        <FactorHeader
          handleFactorVisibility={() => dispatch(handleFactorVisibility())}
        />
        <FactorMapper />
        <FactorFooter
          factorProducts={factorProducts}
          handleClear={() => dispatch(handleClearProducts())}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default FactorContent;
