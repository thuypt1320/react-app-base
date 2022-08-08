import { authConnect, AuthConnectProps } from 'src/redux/stores';
import { useNavigate } from 'react-router';
export const LogoutButton = authConnect(({
  data,
  logout,
  logoutGoogle
}: AuthConnectProps) => {
  const navigator = useNavigate();
  const handleLogout = () => {
    data?.type === 'google' ? logoutGoogle() : logout();
    navigator('/login');
  };
  return <button onClick={handleLogout}>Logout</button>;
});
