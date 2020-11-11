import React from "react";

import FactorMapper from "../FactorMapper";

const FactorContent = ({ factorProducts, handleIncDec, handleRemove }) => {
  return (
    <div className="cart-content">
      <FactorMapper
        factorProducts={factorProducts}
        handleIncDec={handleIncDec}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default FactorContent;
