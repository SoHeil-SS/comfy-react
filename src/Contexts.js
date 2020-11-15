import { createContext } from "react";
const Contexts = createContext({
  factorProducts: [],
  handleRemove: () => {},
  handleState: () => {},
});
export default Contexts;
