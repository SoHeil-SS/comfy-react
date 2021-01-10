import { actionCreator } from "./actionCreator";

export const actionSetData = (payload) => actionCreator("GET_DATA", payload);

export const actionIncAndDecProduct = (payload) =>
  actionCreator("INC_OR_DEC_PRODUCT", payload);

export const actionFactorVisibility = () => actionCreator("FACTOR_VISIBILITY");

export const actionPageIndex = (op) => actionCreator("CHANGE_PAGE_INDEX", op);

export const actionClearCarts = () => actionCreator("CLEAR_ALL_PRODUCTS");

export const actionProductDetail = (id) => actionCreator("GET_DETAILS", id);
