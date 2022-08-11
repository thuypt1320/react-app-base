import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/hooks/use_auth';
import { Layout, LayoutItem } from 'src/components/organisms/layout';
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
    <LayoutItem type={'layout-note'}>
      <p>Id: {data?.user?.id}</p>
      <p>Name: {data?.user?.name}</p>
      <p>Email: {data?.user?.email}</p>
    </LayoutItem>
    {children}
  </Layout>;
};
