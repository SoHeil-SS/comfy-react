import React from "react";

import FactorHeader from "./FactorHeader";
import FactorContent from "./FactorContent";
import FactorFooter from "./FactorFooter";
import { useContext } from "react";
import contexts from "../../contexts";

const Factor = () => {
  const { factorVisibility } = useContext(contexts);
  return (
    <div className={factorVisibility ? "cart showCart" : "cart"}>
      <FactorHeader />
      <FactorContent />
      <FactorFooter />
    </div>
  );
};

export default Factor;
