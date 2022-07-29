import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/types';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined
  },
  reducers: {
    setProfile: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});

export const {
  setProfile
} = authSlice.actions;

export const authReducer = authSlice.reducer;
