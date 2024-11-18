import { createSlice } from '@reduxjs/toolkit';
import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegisterUser.rejected, action => {
        console.error('Registration error:', action.payload);
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLoginUser.rejected, action => {
        console.error('Login error:', action.payload);
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(apiLogoutUser.rejected, action => {
        console.error('Logout error:', action.payload);
      })
      .addCase(apiRefreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
