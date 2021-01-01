import { mainEvents } from "../Events/mainEvents";

const {
  handleGetData,
  handleClearProducts,
  handleFactorVisibility,
  handleIncAndDecProduct,
} = mainEvents;

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return handleGetData(state, payload);

    case "INC_OR_DEC_PRODUCT":
      return handleIncAndDecProduct(state, payload);

    case "CLEAR_ALL_PRODUCTS":
      return handleClearProducts(state, payload);

    case "FACTOR_VISIBILITY":
      return handleFactorVisibility(state);

    default:
      return state;
  }
}
