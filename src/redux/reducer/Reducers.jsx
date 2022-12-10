const initialState = {
  products: [],
  carts: [],
  cartArr: [],
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

export const cartDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARTS":
      return {
        ...state,
        carts: [...state.carts, action.carts],
      };
    default:
      return state;
  }
};
