import {
  handleGetData,
  handleIncAndDecProduct,
  handleClearCarts,
  handleFactorVisibility,
  handlePageIndex,
} from "../Events/stateHandlers";

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return handleGetData(state, payload);

    case "INC_OR_DEC_PRODUCT":
      return handleIncAndDecProduct(state, payload);

    case "CLEAR_ALL_PRODUCTS":
      return handleClearCarts(state, payload);

    case "FACTOR_VISIBILITY":
      return handleFactorVisibility(state);

    case "CHANGE_PAGE_INDEX":
      return handlePageIndex(state, payload);

    default:
      return state;
  }
}
