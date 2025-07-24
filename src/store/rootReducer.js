import { combineReducers } from "redux";
import cartReducer from "./Slice/cartSlice";
import uiReducer from "./Slice/uiSlice.js";
// import other reducers as needed

const rootReducer = combineReducers({
  cart: cartReducer,
  ui: uiReducer,
  // other: otherReducer,
});

export default rootReducer;
