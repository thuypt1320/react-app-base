import { createSlice } from '@reduxjs/toolkit';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    token: undefined
  },
  reducers: {
    login: (state) => {
      const credential = storageService.get(keyStoragesCredential);
      state.user = credential.user;
      state.token = credential.token;
    },
    logout: state => {
      state.user = undefined;
      state.token = undefined;
    }
  }
});

export const {
  login,
  logout
} = authSlice.actions;

export const authReducer = authSlice.reducer;
