import { actionCreator } from "./actionCreator";

export const handleGetData = (payload) => actionCreator("GET_DATA", payload);

export const incAndDecProduct = (payload) =>
  actionCreator("INC_OR_DEC_PRODUCT", payload);

export const handleFactorVisibility = () => actionCreator("FACTOR_VISIBILITY");

export const handleClearCarts = () => actionCreator("CLEAR_ALL_PRODUCTS");
