import { createContext } from "react";
const contexts = createContext({
  dispatch: () => {},
  products: [],
  factorProducts: [],
  factorVisibility: "",
});
export default contexts;
