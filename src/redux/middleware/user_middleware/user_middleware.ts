import { userRepository } from 'src/repositories';
import { GET_LIST } from 'src/redux/types/user_action_types/user_action_types';
import { getList } from 'src/redux/actions/user_actions';

export const userMW = store => next => async action => {
  if (action.type === GET_LIST) {
    const res = await userRepository.list();
    return next(
      getList({
        loading: !res.data,
        data: res.data
      })
    );
  }

  return next(action);
};
