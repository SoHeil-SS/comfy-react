import React from "react";
import { useContext } from "react";

import contexts from "../../contexts";

import FactorHeader from "./FactorHeader";
import FactorMapper from "./FactorMapper";
import FactorFooter from "./FactorFooter";

const FactorContent = () => {
  const { factorVisibility } = useContext(contexts);
  return (
    <div className={factorVisibility ? "cart showCart" : "cart"}>
      <FactorHeader />
      <div className="cart-content">
        <FactorMapper />
      </div>
      <FactorFooter />
    </div>
  );
};

export default FactorContent;
