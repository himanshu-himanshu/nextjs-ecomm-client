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

    // /** Function to add Item to the cart */
    // addItemToCart: (state, action) => {
    //   const { id } = action.payload;

    //   const existingItem = state.cartItems.find((item) => item.id === id);

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //     state.amount += existingItem.price;
    //   } else {
    //     const newItem = { ...action.payload, quantity: 1 };
    //     state.cartItems.push(newItem);
    //     state.amount += newItem.price;
    //   }

    //   state.totalItems += 1;
    // },

    /** Function to add Item to the cart */
    addItemToCart: (state, action) => {
      const { id, quantity } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        state.amount += existingItem.price * quantity;
      } else {
        const newItem = { ...action.payload };
        state.cartItems.push(newItem);
        state.amount += newItem.price * quantity;
      }

      state.totalItems += quantity;
    },

    /** Function to update quantity of the items already in the cart */
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);
      if (type === "INCREASE") {
        existingItem.quantity += 1;
        state.totalItems += 1;
        state.amount += existingItem.price;
      }

      if (type === "DECREASE") {
        existingItem.quantity -= 1;
        state.totalItems -= 1;
        state.amount -= existingItem.price;

        if (existingItem.quantity === 0) {
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
        state.totalItems -= existingItem.quantity;
        state.amount -= existingItem.price * existingItem.quantity;
      }
    },

    /** Function to calculate total items quantity */
    calculateTotalItemsQuantity: (state) => {
      state.totalItems = state.cartItems.length;
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
