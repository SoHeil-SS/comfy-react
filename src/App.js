import { useEffect, useReducer } from "react";

import { reducer } from "./StateManagers/reducer";
import {
  handleFactorVisibility,
  handleGetData,
  handlePageIndex,
} from "./StateManagers/actions";

import { getInitialData } from "./Server/initialData";

import { handleBasketCount } from "./Events/others";

import ProductContainer from "./Components/ProductComponents/ProductContainer";
import FactorContainer from "./Components/FactorComponents/FactorContainer";
// import ProductDetails from "./Components/ProductsComponents/ProductDetails";

import NavigationBar from "./Components/Others/NavigationBar";
import Header from "./Components/Others/Header";
import Loader from "./Components/Others/Loader";
import Portal from "./Components/Others/Portal";

import { DispatchContext } from "./Contexts/DispatchContext";
import { loader } from "./Constants/loader";
import PageIndexer from "./Components/Others/PageIndexer";

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
      dispatch(handleGetData(products))
    );
  }, [pageIndex]);

  if (loading) {
    return <Loader style={loader.styles.application} />;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <NavigationBar
        basketCount={handleBasketCount(factorCarts)}
        handleFactorVisibility={() => dispatch(handleFactorVisibility())}
      />

      <Header />

      <ProductContainer products={products} productDetailId={productDetailId} />

      {!productDetailId && (
        <PageIndexer
          nextDisabled={pageIndex > 2}
          prevDisabled={pageIndex <= 1}
          handlePageIndex={(op) => dispatch(handlePageIndex(op))}
        />
      )}

      <Portal>
        <FactorContainer
          factorVisibility={factorVisibility}
          factorCarts={factorCarts}
        />
      </Portal>
    </DispatchContext.Provider>
  );
};
export default App;
