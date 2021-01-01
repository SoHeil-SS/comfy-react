import { createContext } from "react";
const Contexts = createContext({
  dispatch: () => {},
  products: [],
  factorVisibility: "",
  totalPrice: "",
});
export default Contexts;
