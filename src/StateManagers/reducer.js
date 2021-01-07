import {
  handleSetData,
  handleIncAndDecProduct,
  handleClearCarts,
  handleFactorVisibility,
  handlePageIndex,
  handleProductDetail,
} from "../Events/stateHandlers";

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return handleSetData(state, payload);

    case "INC_OR_DEC_PRODUCT":
      return handleIncAndDecProduct(state, payload);

    case "CLEAR_ALL_PRODUCTS":
      return handleClearCarts(state, payload);

    case "FACTOR_VISIBILITY":
      return handleFactorVisibility(state);

    case "CHANGE_PAGE_INDEX":
      return handlePageIndex(state, payload);

    case "GET_DETAILS":
      return handleProductDetail(state, payload);

    default:
      return state;
  }
}
