export const handleFactorProducts = (products) =>
  products.filter((product) => product.inCart > 0);

export const handleTotalPrice = (factorProducts) => {
  let total = 0;
  factorProducts.forEach((product) => {
    const { price, inCart } = product;
    total += price * inCart;
  });
  return total;
};

export const handleFinallyProducts = (products, productIndex, product) => {
  products.splice(productIndex, 1, product);
};

export const handleScrollTo = (scroll) =>
  setTimeout(() => scroll({ y: 899 }), 300);

export const handleBasketCount = (products) => {
  let basket = null;
  handleFactorProducts(products).forEach((p) => {
    basket += p.inCart;
  });
  return basket;
};

export const handleStateCopier = ({ products, factorVisibility }, id) => ({
  //States
  factorVisibility,
  //Variables
  products: [...products],
  product: { ...products.find((product) => product.id === id) },
  productIndex: products.findIndex((product) => product.id === id),
});
