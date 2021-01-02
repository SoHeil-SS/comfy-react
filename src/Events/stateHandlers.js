import { handleFinallyProducts, handleStateCopier } from "./others";

export const handleGetData = (state, products) => {
  return {
    ...state,
    products,
  };
};

export const handleIncAndDecProduct = (state, { id, op }) => {
  let { products, product, productIndex } = handleStateCopier(state, id);

  if (!product.inCart) {
    product.inCart = 1;
  } else {
    product.inCart = product.inCart + op;
  }

  handleFinallyProducts(products, productIndex, product);

  return { ...state, products };
};

export const handleFactorVisibility = (state) => {
  return {
    ...state,
    factorVisibility: !state.factorVisibility,
  };
};

export const handleClearCarts = (state) => {
  return {
    ...state,
    factorVisibility: !state.factorVisibility,
  };
};
