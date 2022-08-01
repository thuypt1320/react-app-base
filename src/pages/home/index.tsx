import 'src/App.css';
import { useNavigate } from 'react-router';
import {
  useGetProfileQuery,
  useLogoutMutation
} from 'src/services/authService';
export default function Home () {
  const { data: profile } = useGetProfileQuery({});
  const navigator = useNavigate();
  const [logout] = useLogoutMutation({});

  const handleLogout = async () => {
    await logout({});
    navigator('/login');
  };

  return (
    <div className="App">
      <div className="App-header">
        <p style={{ color: '#000' }}>Name: {profile?.user.name}</p>
        <p style={{ color: '#000' }}>Email: {profile?.user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
