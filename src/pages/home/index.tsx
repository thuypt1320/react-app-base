import 'src/App.css';
import { useNavigate } from 'react-router';
import {
  useGetProfileQuery,
  useLogoutMutation
} from 'src/redux/services/authService';

export default function Home () {
  const {
    data
  } = useGetProfileQuery({});
  const navigator = useNavigate();
  const [logout] = useLogoutMutation({});

  const handleLogout = async () => {
    await logout({});
    navigator('/login');
  };

  return (
    <div className="App">
      <div style={{ fontSize: '12px' }}>
        Name: {data?.name} - Email: {data?.email}
        <button onClick={handleLogout}>Logout</button>
        <ul>
          <li><a href={'/users'}>Users</a></li>
          <li><a href={'/create'}>Create</a></li>
        </ul>
      </div>
    </div>
  );
}
