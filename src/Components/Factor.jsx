import React from "react";

import FactorHeader from "./FactorComponents/FactorHeader";
import FactorContent from "./FactorComponents/FactorContent";
import FactorFooter from "./FactorComponents/FactorFooter";

const Factor = ({
  factorProducts,
  handleIncDec,
  handleRemove,
  openDialog,
  handleClear,
  factorVisibility,
  totalPrice,
  handleFactorVisibility,
}) => {
  return (
    <div className={factorVisibility ? "cart showCart" : "cart"}>
      <FactorHeader handleFactorVisibility={handleFactorVisibility} />
      <FactorContent
        factorProducts={factorProducts}
        handleIncDec={handleIncDec}
        handleRemove={handleRemove}
      />
      <FactorFooter
        factorProducts={factorProducts}
        totalPrice={totalPrice}
        openDialog={openDialog}
        handleClear={handleClear}
      />
    </div>
  );
};

export default Factor;
