function handleGetData(state, products) {
  return {
    ...state,
    products,
  };
}

function handleIncAndDecProduct(state, { id, op }) {
  let { products, product } = stateHandler(state, id);

  const productIndex = products.findIndex((product) => product.id === id);

  if (!product.inCart) {
    product.inCart = 1;
  } else {
    product.inCart = product.inCart + op;
  }
  handleFinallyProducts(products, productIndex, product);

  return { ...state, products };
}

function handleFactorVisibility(state) {
  return {
    ...state,
    factorVisibility: !state.factorVisibility,
  };
}

function handleClearProducts(state) {
  return {
    ...state,
    factorVisibility: !state.factorVisibility,
  };
}

function handleFinallyProducts(products, productIndex, product) {
  products.splice(productIndex, 1, product);
}

export const handleGetFactorProducts = (products) =>
  products.filter((product) => product.inCart > 0);

const stateHandler = ({ products, factorVisibility, totalPrice }, id) => ({
  product: { ...products.find((product) => product.id === id) },
  products: [...products],
  factorVisibility,
  totalPrice,
});

export const mainEvents = {
  handleGetData,
  handleIncAndDecProduct,
  handleFactorVisibility,
  handleClearProducts,
};
