import { useContext } from "react";

import { DispatchContext } from "../Contexts/DispatchContext";

export const useDispatch = () => useContext(DispatchContext);
