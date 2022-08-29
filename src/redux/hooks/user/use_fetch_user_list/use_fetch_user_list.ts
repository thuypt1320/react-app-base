import { stores, subscribe } from 'src/redux/stores';
import { getList } from 'src/redux/actions';
import { useEffect, useState } from 'react';

export const useFetchUserList = () => {
  const [data, setData] = useState(stores.getState().user.data);
  const [loading, setLoading] = useState(stores.getState().common.loading);
  const dispatch = stores.dispatch;

  useEffect(() => {
    dispatch(getList({}));
    subscribe(() => {
      setData(stores.getState().user.data);
      setLoading(stores.getState().common.loading);
    });
  }, []);

  return {
    data,
    loading,
    getList: () => {
      dispatch(getList({}));
      subscribe(() => {
        setData(stores.getState().user.data);
        setLoading(stores.getState().common.loading);
      });
    }
  };
};
