import { actionCreator } from "./actionCreator";

export const handleSetData = (payload) => actionCreator("GET_DATA", payload);

<<<<<<< HEAD
export const actionIncAndDecProduct = (payload) =>
=======
export const handleIncAndDecProduct = (payload) =>
>>>>>>> 0e7b22be16da8bacf1b42017b001b0166a049043
  actionCreator("INC_OR_DEC_PRODUCT", payload);

export const actionFactorVisibility = () => actionCreator("FACTOR_VISIBILITY");

export const actionPageIndex = (op) => actionCreator("CHANGE_PAGE_INDEX", op);

export const actionClearCarts = () => actionCreator("CLEAR_ALL_PRODUCTS");

export const actionProductDetail = (id) => actionCreator("GET_DETAILS", id);
