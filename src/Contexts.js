import { createContext } from "react";
const Contexts = createContext({
  isDialogOpen: "",
  factorVisibility: "",
  signedUser: "",
  factorProducts: [],
  openDialog: () => {},
  handleState: () => {},
  handlePath: () => {},
  handleAddProduct: () => {},
  handleIncDec: () => {},
  handleRemove: () => {},
  handleClear: () => {},
  handleTotalPrice: () => {},
  handleFactorVisibility: () => {},
});
export default Contexts;
