import { useEffect, useMemo, useReducer } from "react";

import { handleGetData } from "./StateManager/actions";
import { handleGetFactorProducts } from "./Events/mainEvents";
import Contexts from "./contexts";

import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductMapper from "./Components/ProductsComponents/ProductMapper.jsx";
import FactorContent from "./Components/FactorComponents/FactorContent";
import OurProducts from "./Components/OurProducts";
// import ProductDetails from "./Components/ProductsComponents/ProductDetails";
import { reducer } from "./StateManager/reducer";
import { getInitialData } from "./Server/initialData";

const App = () => {
  const [{ products, factorVisibility }, dispatch] = useReducer(reducer, {
    products: [],
    factorVisibility: false,
  });

  useEffect(() => {
    getInitialData().then(
      (products) => setTimeout(() => dispatch(handleGetData(products))),
      750
    );
  }, []);

  const factorProducts = useMemo(() => handleGetFactorProducts(products), [
    products,
  ]);

  if (!products.length) {
    return (
      <Loader
        style={{
          marginLeft: "42%",
          marginTop: "20%",
          width: "250px",
          height: "250px",
        }}
      />
    );
  }

  return (
    <Contexts.Provider
      value={{
        dispatch,
        products,
        factorProducts,
        factorVisibility,
      }}
    >
      {/* <ProductDetails product={product} /> */}
      <Navbar />
      <Header />
      <OurProducts products={products} />
      <FactorContent />
    </Contexts.Provider>
  );
};
export default App;
