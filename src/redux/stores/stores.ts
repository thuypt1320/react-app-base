import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/authReducer';
import { authApi } from 'src/services/authService';
export const stores = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
  }
});

export const authSelector = state => state.auth.user;
