import { combineReducers } from "redux";
import {
  productReducer,
  productDetailReducer,
  cartReducer,
  cartDetailReducer,
} from "./Reducers";

const rootReducer = combineReducers({
  productReducer,
  productDetailReducer,
  cartReducer,
  cartDetailReducer,
});

export default rootReducer;
