import { handleFinallyCarts, handleStateCopier } from "./others";

export const handleGetData = (state, products) => ({
  ...state,
  loading: false,
  products,
});

export const handleIncAndDecProduct = (state, { id, op }) => {
  let { factorCarts, cart, product, cartIndex } = handleStateCopier(state, id);

  if (!cart) {
    product.inCart = 1;
    factorCarts.push(product);
  } else {
    cart.inCart = cart.inCart + op;
    handleFinallyCarts(factorCarts, cartIndex, cart);
  }

  return { ...state, factorCarts };
};

export const handleFactorVisibility = (state) => ({
  ...state,
  factorVisibility: !state.factorVisibility,
});

export const handleClearCarts = (state) => ({
  ...state,
  factorVisibility: !state.factorVisibility,
  factorCarts: [],
});

export const handleSliceProducts = (products, index) =>
  products.slice(index * 3, index * 3 + 3);

export const handlePageIndex = (state, op) => ({
  ...state,
  loading: true,
  pageIndex: state.pageIndex + op,
});

export const handleProductDetail = (state, productDetailId) => ({
  ...state,
  productDetailId,
});
