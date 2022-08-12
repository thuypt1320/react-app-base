import { User } from 'src/types';
import {
  CREATE, DELETE,
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
      const data = state?.data?.map(item => item?.id === action.payload.user?.id ? ({ ...item, ...action.payload.user }) : item);
      return {
        ...state,
        ...action.payload,
        data
      };
    }
    case DELETE: {
      const data = state?.data?.filter(item => item?.id !== action.payload.user?.id);
      return {
        ...state,
        data,
        user: {}
      };
    }
    default:
      return state;
  }
};
