import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from 'src/redux/services/authService';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { ICredential } from 'types/credential';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<ICredential>) => {
        storageService.set(keyStoragesCredential, action.payload);
      }
    ).addMatcher(authApi.endpoints.logout.matchFulfilled,
      () => {
        storageService.remove(keyStoragesCredential);
      }
    );
  }
});

export const authReducer = authSlice.reducer;
