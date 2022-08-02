import 'src/App.css';
import { useNavigate } from 'react-router';
import { authSelector } from 'src/redux/stores';
import { GET_PROFILE, LOGOUT } from 'src/redux/auth_types';
import { useDispatch, useSelector } from 'react-redux';

export default function Home () {
  const navigator = useNavigate();
  const data = useSelector(authSelector);
  const dispatch = useDispatch();

  dispatch({ type: GET_PROFILE });

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigator('/login');
  };

  return (
    <div>
      <div style={{ fontSize: '12px' }}>
        Name: {data?.name}
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleLogout}>Logout</button>
        <ul>
          <li><a href={'/users'}>Users</a></li>
          <li><a href={'/users/create'}>Create</a></li>
        </ul>
        ----
        <p>Id: {data?.id}</p>
        <p>Name: {data?.name}</p>
        <p>Email: {data?.email}</p>
      </div>
    </div>
  );
}
