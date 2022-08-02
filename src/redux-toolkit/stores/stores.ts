import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux-toolkit/auth_reducer';
import { authApi } from 'src/redux-toolkit/services/auth_service';
import { userApi } from 'src/redux-toolkit/services/user_service';
import { usersReducer } from 'src/redux-toolkit/users_reducer/users_reducer';

export const stores = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    user: usersReducer
  }
});

export const authSelector = state => state.auth.user;
