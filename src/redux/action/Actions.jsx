import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
  return { type: ActionTypes.SET_PRODUCTS, products };
};

export const getProducts = (products) => {
  return { type: ActionTypes.READ_PRODUCTS, products };
};

export const setCarts = (carts) => {
  return { type: ActionTypes.SET_CARTS, carts };
};

export const getCarts = (
  image,
  store_name,
  product_name,
  shipping_method,
  price
) => {
  return {
    type: ActionTypes.GET_CARTS,
    image,
    store_name,
    product_name,
    shipping_method,
    price,
  };
};
