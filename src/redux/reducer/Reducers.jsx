const initialState = {
  products: [],
  carts: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "READ_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARTS":
      return {
        ...state,
        carts: action.carts,
      };
    default:
      return state;
  }
};
