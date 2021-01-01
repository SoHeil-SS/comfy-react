import { mainEvents } from "../EventHandlers/mainEvents";

const {
  handleDataReceived,
  handleClearProducts,
  handleFactorVisibility,
  handleIncAndDecProduct,
  handleRemoveProduct,
} = mainEvents;

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "DATA_RECEIVED":
      return handleDataReceived(state, payload);

    case "INC_AND_DEC_PRODUCT":
      return handleIncAndDecProduct(state, payload);

    case "CLEAR_ALL_PRODUCTS":
      return handleClearProducts(state, payload);

    case "FACTOR_VISIBILITY":
      return handleFactorVisibility(state);

    default:
      break;
  }
}
