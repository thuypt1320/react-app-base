import { useEffect, useState } from 'react';
import { User } from 'src/types';
import { authRepository } from 'src/repositories';
export const useGetProfileQuery = () => {
  const [data, setData] = useState<User>();

  const getProfile = async () => {
    const res = await authRepository.getProfile();
    setData(res.data);
  };
  useEffect(() => {
    if (!data) getProfile().then();
  });

  return ({ data });
};
