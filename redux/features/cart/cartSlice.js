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
      const { id } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        console.log("Already");
        existingItem.quantity = existingItem.quantity + 1;
        state.totalItems = ++state.totalItems;
        state.amount = state.amount + existingItem.price;
      } else {
        // If the item is not in the cart, add it
        console.log("Not Already");
        let item = { ...action.payload, quantity: 1 };
        state.cartItems = [...state.cartItems, item];
        state.totalItems = ++state.totalItems;
        state.amount = state.amount + item.price;
      }
    },

    /** Function to update quantity of the items already in the cart */
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (type === "INCREASE") {
        existingItem.quantity = existingItem.quantity + 1;
        state.totalItems = ++state.totalItems;
        state.amount = state.amount + existingItem.price;
      }
      if (type === "DECREASE") {
        existingItem.quantity = existingItem.quantity - 1;
        state.totalItems = --state.totalItems;
        state.amount = state.amount - existingItem.price;

        // While reducing the quantity if it become 0, remove it from cart
        if (existingItem.quantity == 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },

    /** Function to delete the item from cart */
    deleteItem: (state, action) => {
      const { id } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalItems = state.totalItems - existingItem.quantity;
        state.amount =
          state.amount - existingItem.price * existingItem.quantity;
      }

      return;
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
export const {
  clearCart,
  addItemToCart,
  calculateTotalItemsQuantity,
  updateQuantity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
