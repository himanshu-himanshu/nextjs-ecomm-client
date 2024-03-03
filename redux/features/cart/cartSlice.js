import { createSlice } from "@reduxjs/toolkit";

/** Initial State for the cart */
const initialState = {
  cartItems: [
    {
      id: "7bdf17fb-63de-4e32-a3e9-d93f1fc2e891",
      category: "Hoodie",
      title: "Black Hoodie",
      brand: "Nike",
      price: 50,
      trending: true,
      image:
        "https://warsawsneakerstore.com/storage/media/f1000/2023/nike/218365/nike-solo-swoosh-fleece-hoodie-white-dx1355-051-64e4bc1badc40.jpg",
      type: "Clothing",
      gender: "men",
      rating: 4,
      quantity: 2,
    },
  ],
  amount: 30,
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
