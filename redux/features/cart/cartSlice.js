import { createSlice } from "@reduxjs/toolkit";

/** Initial State for the cart */
const initialState = {
  cartItems: [],
  amount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /** Function to reset cart */
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.totalItems = 0;
    },

    /** Function to add Item to the cart */
    addItemToCart: (state, action) => {
      let item = { ...action.payload, quantity: 1 };
      state.cartItems = [...state.cartItems, item];
      state.totalItems = ++state.totalItems;
    },

    /** Function to calculate total items quantity */
    calculateTotalItemsQuantity: (state) => {
      let total = 0;
      total = state.cartItems.length;
      state.totalItems = total;
    },
  },
});

/** Export all cart actions created earlier */
export const { clearCart, addItemToCart, calculateTotalItemsQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
