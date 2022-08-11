import { DONE, ERROR, PROCESSING } from 'src/redux/types';
interface ICommonState {
  loading: boolean;
}

interface ICommonAction {
  type: string,
  payload: boolean
}

const initialState = { loading: true };
export const commonReducer = (state: ICommonState = initialState, action: ICommonAction) => {
  switch (action.type) {
    case DONE:
      return { loading: false };
    case PROCESSING:
      return { loading: true };
    case ERROR:
      return { loading: false };
    default:
      return state;
  }
};
