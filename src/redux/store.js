// store.js
import {configureStore} from '@reduxjs/toolkit';
import shoeReducer from './shoeSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    shoes: shoeReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
