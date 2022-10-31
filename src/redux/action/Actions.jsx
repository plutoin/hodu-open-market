import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
  return { type: ActionTypes.SET_PRODUCTS, products };
};

export const getProducts = (products) => {
  return { type: ActionTypes.READ_PRODUCTS, products };
};
