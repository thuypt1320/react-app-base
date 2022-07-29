import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/authReducer';
export const stores = configureStore({
  reducer: { auth: authReducer }
});

export const authSelector = state => state.auth.user;
