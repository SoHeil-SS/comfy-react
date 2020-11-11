import React from "react";

import FactorItem from "./FactorItem";

const FactorMapper = ({ factorProducts, handleIncDec, handleRemove }) => {
  const Carts = factorProducts.map((p) => {
    return (
      <FactorItem
        key={p.id}
        title={p.title}
        total={p.total}
        image={p.image}
        inCart={p.inCart}
        handleIncDec={(op) => handleIncDec(p.id, op)}
        handleRemove={() => handleRemove(p.id)}
      />
    );
  });
  return <>{Carts}</>;
};

export default FactorMapper;
