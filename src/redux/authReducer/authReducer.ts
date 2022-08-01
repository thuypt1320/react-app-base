import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from 'src/services/authService';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { ICredential } from 'types/credential';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined
  },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<ICredential>) => {
        storageService.set(keyStoragesCredential, action.payload);
      }
    )
      .addMatcher(authApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
        }
      )
      .addMatcher(authApi.endpoints.logout.matchFulfilled,
        (state) => {
          state.user = undefined;
          storageService.remove(keyStoragesCredential);
        }
      );
  }
});

// export const {
//   // setProfile
// } = authSlice.actions;

export const authReducer = authSlice.reducer;
