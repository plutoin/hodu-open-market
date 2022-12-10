import { combineReducers } from "redux";
import { productReducer, productDetailReducer, cartReducer } from "./Reducers";

const rootReducer = combineReducers({
  productReducer,
  productDetailReducer,
  cartReducer,
});

export default rootReducer;
