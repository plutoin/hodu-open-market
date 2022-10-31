import { combineReducers } from "redux";
import { productReducer, productDetailReducer } from "./Reducers";

const rootReducer = combineReducers({
  productReducer,
  productDetailReducer,
});

export default rootReducer;
