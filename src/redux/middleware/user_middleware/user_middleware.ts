import { userRepository } from 'src/repositories';
import {
  CREATE,
  GET_DETAIL,
  GET_LIST
} from 'src/redux/types/user_action_types/user_action_types';
import { getDetail, getList } from 'src/redux/actions/user_actions';

export const userMW = store => next => async action => {
  if (action.type === GET_LIST) {
    const res = await userRepository.list();
    return next(
      getList({
        loading: Boolean(!res.data),
        data: res.data
      })
    );
  }

  if (action.type === GET_DETAIL) {
    const res = await userRepository.detail(action?.payload?.id);
    return next(
      getDetail({
        loading: Boolean(!res.data),
        user: res.data
      })
    );
  }

  if (action.type === CREATE) {
    const res = await userRepository.list();
    next(
      getList({
        loading: Boolean(!res.data),
        data: res.data
      })
    );
    return next(action);
  }

  return next(action);
};
