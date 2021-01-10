import { classNames } from "../Constants/classNames";
import { others } from "../Constants/others";

export const handleFactorCarts = (factorCarts) =>
  factorCarts.filter((product) => product.inCart > 0);

export const handleTotalPrice = (factorCarts) => {
  let total = 0;
  factorCarts.forEach((cart) => {
    const { price, inCart } = cart;
    total += price * inCart;
  });
  return total;
};

export const handleFinallyCarts = (factorCarts, cartIndex, cart) => {
  factorCarts.splice(cartIndex, 1, cart);
};

export const handleScrollTo = (scroll) =>
  setTimeout(() => scroll({ y: 899 }), 300);

export const handleBasketCount = (factorCarts) => {
  let basket = null;
  handleFactorCarts(factorCarts).forEach((p) => {
    basket += p.inCart;
  });
  return basket;
};

export const handleStateCopier = (
  { products, factorCarts, factorVisibility },
  id
) => ({
  //States
  factorVisibility,
  //Variables
  factorCarts: [...factorCarts],
  cart: factorCarts.find((cart) => cart.id === id),
  product: { ...products.find((cart) => cart.id === id) },
  cartIndex: factorCarts.findIndex((cart) => cart.id === id),
});

export const handleFindProductAndDetails = (products, productDetailId) => {
  const product = {
    ...products.find((product) => product.id === productDetailId),
  };
  const cls = classNames.productItemClassNames;
  const { article, btn, detailContent } = productDetailId
    ? cls.details
    : cls.main;

  product.textContent = others.fakeDetails;

  return {
    condition: !!productDetailId,
    product: [product],
    classNames: {
      article,
      detailContent,
      btn,
    },
  };
};
