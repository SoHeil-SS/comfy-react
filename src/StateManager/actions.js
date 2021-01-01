import { actionCreator } from "./actionCreator";

export const dataReceived = (payload) =>
  actionCreator("DATA_RECEIVED", payload);

export const incAndDecProduct = (payload) =>
  actionCreator("INC_AND_DEC_PRODUCT", payload);

export const handleFactorVisibility = () => actionCreator("FACTOR_VISIBILITY");

export const handleClearProducts = () => actionCreator("CLEAR_ALL_PRODUCTS");
