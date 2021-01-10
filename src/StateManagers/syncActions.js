import { actionCreator } from "./actionCreator";

export const handleSetData = (payload) => actionCreator("GET_DATA", payload);

export const handleIncAndDecProduct = (payload) =>
  actionCreator("INC_OR_DEC_PRODUCT", payload);

export const handleFactorVisibility = () => actionCreator("FACTOR_VISIBILITY");

export const handlePageIndex = (op) => actionCreator("CHANGE_PAGE_INDEX", op);

export const handleClearCarts = () => actionCreator("CLEAR_ALL_PRODUCTS");

export const handleProductDetail = (id) => actionCreator("GET_DETAILS", id);
