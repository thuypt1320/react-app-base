import { useAuth } from 'src/hooks/use_auth';
export const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
};
