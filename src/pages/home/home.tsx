import 'src/App.css';
import { logout } from 'src/redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'src/redux/stores';
export default function Home () {
  const profile = useSelector(authSelector);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <div className="App-header">
        <p style={{ color: '#000' }}>Name: {profile.name}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
