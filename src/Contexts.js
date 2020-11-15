import { createContext } from "react";
const Contexts = createContext({
  factorVisibility: "",
  factorProducts: [],
  handleRemove: () => {},
  handleState: () => {},
  handleIncDec: () => {},
  openDialog: () => {},
  isDialogOpen: "",
  handlePath: () => {},
  signedUser: "",
  totalPrice: () => {},
  handleClear: () => {},
  handleFactorVisibility: () => {},
  handleAddProduct: () => {},
});
export default Contexts;
