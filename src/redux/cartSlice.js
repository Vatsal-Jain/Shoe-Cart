// cartSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({...newItem, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export default cartSlice.reducer;
