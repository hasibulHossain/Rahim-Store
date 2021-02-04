import { combineReducers } from "redux";

//reducers
import productReducer from "./product";

export default combineReducers({
  productsRTR: productReducer,
});
