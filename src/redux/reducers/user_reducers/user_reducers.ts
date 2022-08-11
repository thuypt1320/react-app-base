import { User } from 'src/types';
import {
  CREATE,
  GET_DETAIL,
  GET_LIST, UPDATE
} from 'src/redux/types/user_action_types/user_action_types';
export interface IUserState {
  data?: User[],
  user?: User,
  loading?: boolean
}

export interface IUserAction {
  type: string,
  payload: IUserState
}

export const userReducer = (state: IUserState = {}, action: IUserAction) => {
  switch (action.type) {
    case GET_LIST: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        ...action.payload
      };
    }
    case CREATE: {
      const data = state?.data ? [...state.data, { ...action.payload.user }] : [action.payload.user];
      return {
        ...state,
        ...{ data }
      };
    }
    case UPDATE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
