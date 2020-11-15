import { createContext } from "react";
const Contexts = createContext({
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
export default Contexts;
