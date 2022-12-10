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

export const getCarts = (carts) => {
  return { type: ActionTypes.GET_CARTS, carts };
};
