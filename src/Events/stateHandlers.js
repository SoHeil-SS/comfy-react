import { handleFinallyCarts, handleStateCopier } from "./others";

export const handleSetData = (state, products) => ({
  ...state,
  loading: false,
  products,
});

export const handleIncAndDecProduct = (state, { id, op }) => {
  let { factorCarts, cart, product, cartIndex } = handleStateCopier(state, id);

  if (!cart.inCart) {
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
  factorCarts: [],
});

export const handlePageIndex = (state, op) => ({
  ...state,
  loading: true,
  pageIndex: state.pageIndex + op,
});

export const handleProductDetail = (state, productDetailId) => ({
  ...state,
  productDetailId,
});
