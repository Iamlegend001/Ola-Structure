import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './Slice/uiSlice.js';
// import other reducers as needed

const rootReducer = combineReducers({
  ui: uiReducer,
  // other: otherReducer,
});

export default rootReducer;
