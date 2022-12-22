const initialState = {
  products: [],
  carts: [],
  image: "",
  store_name: "",
  product_name: "",
  shipping_method: "",
  price: "",
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
        image: action.image,
        store_name: action.store_name,
        product_name: action.product_name,
        shipping_method: action.shipping_method,
        price: action.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      };
    default:
      return state;
  }
};
