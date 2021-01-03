import { handleFinallyProducts, handleStateCopier } from "./others";

export const handleGetData = (state, products) => {
  const { pageIndex } = state;
  return {
    ...state,
    products: handleSliceProducts(products, pageIndex),
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

export const handleFactorVisibility = (state) => ({
  ...state,
  factorVisibility: !state.factorVisibility,
});

export const handleClearCarts = (state) => ({
  ...state,
  factorVisibility: !state.factorVisibility,
});

export const handleSliceProducts = (products, index) =>
  products.slice(index * 3, index * 3 + 3);

export const handlePageIndex = (state, op) => ({
  ...state,
  pageIndex: state.pageIndex + op,
});
