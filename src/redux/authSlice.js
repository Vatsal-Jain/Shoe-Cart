// authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, // Set to true when the user is authenticated
  user: null, // Store user information when authenticated
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signOut: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {signIn, signOut} = authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;
