import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/authReducer';
import { authApi } from 'src/redux/services/authService';
import { userApi } from 'src/redux/services/userService';
import { usersReducer } from 'src/redux/usersReducer/usersReducer';
export const stores = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    user: usersReducer
  }
});

export const authSelector = state => state.auth.user;
