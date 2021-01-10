import { useEffect, useReducer } from "react";

import { reducer } from "./StateManagers/reducer";
import { actionSetData } from "./StateManagers/syncActions";

import { getInitialData } from "./Server/initialData";

import MainContainer from "./Components/Containers/MainContainer";

import { DispatchContext } from "./Contexts/DispatchContext";

const App = () => {
  const [
    {
      factorVisibility,
      loading,
      products,
      factorCarts,
      pageIndex,
      productDetailId,
    },
    dispatch,
  ] = useReducer(reducer, {
    factorVisibility: false,
    loading: true,
    products: [],
    factorCarts: [],
    pageIndex: 1,
    productDetailId: null,
  });

  useEffect(() => {
    getInitialData(pageIndex).then((products) =>
      dispatch(actionSetData(products))
    );
  }, [pageIndex, dispatch]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <MainContainer
        productDetailId={productDetailId}
        factorVisibility={factorVisibility}
        loading={loading}
        pageIndex={pageIndex}
        products={products}
        factorCarts={factorCarts}
      />
    </DispatchContext.Provider>
  );
};
export default App;
