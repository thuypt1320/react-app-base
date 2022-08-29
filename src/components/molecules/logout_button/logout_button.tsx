import { useAuth } from 'src/redux/hooks/auth/use_auth';
export const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
};
