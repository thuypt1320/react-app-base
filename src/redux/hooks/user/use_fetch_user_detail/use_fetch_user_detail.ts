import { stores, subscribe } from 'src/redux/stores';
import { getDetail } from 'src/redux/actions';
import { useEffect, useState } from 'react';

export const useFetchUserDetail = (id?: string) => {
  const [data, setData] = useState(stores.getState().user.user);
  const [loading, setLoading] = useState(stores.getState().common.loading);
  const dispatch = stores.dispatch;

  useEffect(() => {
    if (id) {
      dispatch(getDetail({ id }));
      subscribe(() => {
        setData(stores.getState().user.user);
        setLoading(stores.getState().common.loading);
      });
    }
  }, []);

  return {
    data,
    loading,
    getDetail: (id: string) => {
      dispatch(getDetail({ id }));
      subscribe(() => {
        setData(stores.getState().user.user);
        setLoading(stores.getState().common.loading);
      });
    }
  };
};
