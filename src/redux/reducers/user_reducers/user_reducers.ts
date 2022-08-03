import { User } from 'src/types';
import { GET_LIST } from 'src/redux/types/user_action_types/user_action_types';
interface IUserState {
  data?: User[],
  loading?: boolean
}

interface IUserAction {
  type: string,
  payload: IUserState
}

export const userReducer = (state: IUserState = {
  data: [],
  loading: true
}, action: IUserAction) => {
  switch (action.type) {
    case GET_LIST: {
      const newState = {
        ...state,
        data: [{ name: '-' }]
      };
      return newState;
    }
    default:
      return state;
  }
};
