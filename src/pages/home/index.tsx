/* eslint-disable react/prop-types */
import 'src/App.css';
import { useNavigate } from 'react-router';
import {
  authConnect,
  authSelector,
  subscribe
} from 'src/redux/stores';
import { useEffect, useState } from 'react';
import { AuthState } from 'src/redux/reducers/auth_reducer';
import { updateState } from 'src/utils/updateState';

function Home ({
  data,
  logout,
  logoutGoogle,
  getProfile
}) {
  const [profile, setProfile] = useState<AuthState>(data);
  const navigator = useNavigate();

  useEffect(() => {
    subscribe(() => {
      setProfile(authSelector);
    });
  }, []);

  const handleLogout = () => {
    profile?.type === 'google' ? logoutGoogle() : logout();
    navigator('/login');
  };

  const handleProfile = () => {
    getProfile();
    subscribe(() => {
      setProfile(authSelector);
    });
    updateState(profile);
  };

  return (
    <div>
      <div style={{ fontSize: '12px' }}>
        Name: {profile?.data?.name}
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleProfile}>profile</button>

        <ul>
          <li><a href={'/users'}>Users</a></li>
          <li><a href={'/users/create'}>Create</a></li>
        </ul>
        ----
        <p>Id: {profile?.data?.id}</p>
        <p>Name: {profile?.data?.name}</p>
        <p>Email: {profile?.data?.email}</p>
      </div>
    </div>
  );
}
export default authConnect(Home);
