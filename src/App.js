import { useEffect, useReducer } from "react";

import { reducer } from "./StateManagers/reducer";
import { handleFactorVisibility, handleGetData } from "./StateManagers/actions";

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

const App = () => {
  const [{ products, factorVisibility }, dispatch] = useReducer(reducer, {
    products: [],
    factorVisibility: false,
  });

  useEffect(() => {
    getInitialData().then(
      (products) => setTimeout(() => dispatch(handleGetData(products))),
      1750
    );
  }, []);

  if (!products.length) {
    return <Loader style={loader.styles.application} />;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      {/* <ProductDetails product={product} /> */}
      <NavigationBar
        basketCount={handleBasketCount(products)}
        handleFactorVisibility={() => dispatch(handleFactorVisibility())}
      />
      <Header />
      <ProductContainer products={products} />
      <Portal>
        <FactorContainer
          factorVisibility={factorVisibility}
          products={products}
        />
      </Portal>
    </DispatchContext.Provider>
  );
};
export default App;
