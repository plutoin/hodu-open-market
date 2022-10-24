import { combineReducers } from "redux";
import productReducer from "./Reducers";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
