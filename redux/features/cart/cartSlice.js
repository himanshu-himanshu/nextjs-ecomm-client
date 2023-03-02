import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItemToCart: (state, action) => {
      let item = { ...action.payload, quantity: 1 };
      state.cartItems = [...state.cartItems, item];
      state.totalItems = ++state.totalItems;
    },
    calculateTotalItemsQuantity: (state) => {
      let total = 0;
      total = state.cartItems.length;
      state.totalItems = total;
    },
  },
});

export const { clearCart, addItemToCart, calculateTotalItemsQuantity } =
  cartSlice.actions;

// this is for configureStore
export default cartSlice.reducer;
