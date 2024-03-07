import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "../features/cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  timeout: 1000,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

export default store;
