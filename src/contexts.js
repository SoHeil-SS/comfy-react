import { createContext } from "react";
const Contexts = createContext({
  dispatch: () => {},
  products: [],
  factorProducts: [],
  factorVisibility: "",
});
export default Contexts;
