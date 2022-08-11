import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/hooks/use_auth';

interface AuthProviderProps {
  children: ReactNode;
}

export const Auth = ({ children }: AuthProviderProps) => {
  const navigator = useNavigate();
  const { data } = useAuth();

  useEffect(() => {
    if (!data?.access_token) navigator('/login');
  }, [data]);

  return <div>
    {children}
  </div>;
};
