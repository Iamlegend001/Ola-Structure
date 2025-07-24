import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price, type }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const idx = state.items.findIndex(
        (i) => i.id === action.payload.id && i.type === action.payload.type
      );
      if (idx !== -1) state.items.splice(idx, 1);
    },
    addAllToCart: (state, action) => {
      // action.payload: array of items
      state.items = [...state.items, ...action.payload];
    },
    removeAllOfType: (state, action) => {
      // action.payload: 'scooter' or 'motorcycle'
      state.items = state.items.filter((item) => item.type !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addAllToCart,
  removeAllOfType,
  clearCart,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => {
    // Remove non-numeric chars from price string
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^\d]/g, ""))
        : item.price;
    return sum + (price || 0);
  }, 0);
export const selectScooterCartItems = (state) =>
  state.cart.items.filter((item) => item.type === "scooter");
export const selectMotorcycleCartItems = (state) =>
  state.cart.items.filter((item) => item.type === "motorcycle");
export default cartSlice.reducer;
