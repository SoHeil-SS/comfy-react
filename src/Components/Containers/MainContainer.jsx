import { useDispatch } from "../../Hooks/useDispatch";

import {
  actionFactorVisibility,
  actionPageIndex,
} from "../../StateManagers/syncActions";

import { handleBasketCount } from "../../Events/others";

import ProductContainer from "../Containers/ProductContainer";
import FactorContainer from "../Containers/FactorContainer";

import Header from "../Others/Header";
import PageIndexer from "../Others/PageIndexer";
import Portal from "../Others/Portal";
import Loader from "../Others/Loader";
import NavbarContainer from "../Containers/NavbarContainer";

import { styles } from "../../Constants/styles";

function MainContainer({
  productDetailId,
  factorVisibility,
  loading,
  pageIndex,
  factorCarts,
  products,
}) {
  const dispatch = useDispatch();

  if (loading) return <Loader style={styles.loader.application} />;

  return (
    <>
      <NavbarContainer
        basketCount={handleBasketCount(factorCarts)}
        actionFactorVisibility={() => dispatch(actionFactorVisibility())}
      />
      <Header />
      <ProductContainer products={products} productDetailId={productDetailId} />
      {!productDetailId && (
        <PageIndexer
          nextDisabled={pageIndex > 2}
          prevDisabled={pageIndex <= 1}
          actionPageIndex={(op) => dispatch(actionPageIndex(op))}
        />
      )}
      <Portal>
        <FactorContainer
          factorVisibility={factorVisibility}
          factorCarts={factorCarts}
        />
      </Portal>
    </>
  );
}

export default MainContainer;
