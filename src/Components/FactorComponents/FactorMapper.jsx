import React, { useContext } from "react";

import Contexts from "../../Contexts";
import FactorItem from "./FactorItem";

const FactorMapper = () => {
  const { factorProducts, handleIncDec, handleRemove } = useContext(Contexts);
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
