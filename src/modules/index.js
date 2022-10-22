import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
