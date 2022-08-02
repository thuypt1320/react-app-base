import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'src/redux-toolkit/services/user_service';
import { User } from 'src/types';
export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    users: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      }
    )
      .addMatcher(
        userApi.endpoints.createUser.matchFulfilled,
        (state, action: PayloadAction<User>) => {
          const newState = [...state.users];
          newState.push(action.payload);
          state.users = newState;
        }
      );
  }
});

export const usersReducer = usersSlice.reducer;
