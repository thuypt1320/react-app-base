import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/redux/hooks/auth/use_auth';
import { Layout } from 'src/components/organisms/layout';
import { Header } from 'src/components/organisms/header';

interface AuthProviderProps {
  children: ReactNode;
}

export const Auth = ({ children }: AuthProviderProps) => {
  const navigator = useNavigate();
  const { data } = useAuth();

  useEffect(() => {
    if (!data?.access_token) navigator('/login');
  }, [data]);

  return <Layout>
    <Header/>
    {children}
  </Layout>;
};
