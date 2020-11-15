import { createContext } from "react";
const contexts = createContext({
  isDialogOpen: "",
  factorVisibility: "",
  signedUser: "",
  totalPrice: "",
  factorProducts: [],
  openDialog: () => {},
  handleState: () => {},
  handlePath: () => {},
  handleAddProduct: () => {},
  handleIncDec: () => {},
  handleRemove: () => {},
  handleClear: () => {},
  handleFactorVisibility: () => {},
});
export default contexts;
