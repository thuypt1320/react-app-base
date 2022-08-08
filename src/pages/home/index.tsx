import 'src/App.css';
import {
  authConnect, AuthConnectProps, authSelector, subscribe
} from 'src/redux/stores';
import { LogoutButton } from 'src/components/molecules/logout_button';
import { useState } from 'react';
import { updateState } from 'src/utils/updateState';

function Home ({
  getProfile
}: AuthConnectProps) {
  const [data, setData] = useState(authSelector);
  const handleProfile = () => {
    getProfile();
    subscribe(() => {
      setData(authSelector);
      updateState(data);
    });
  };

  return (
    <div>
      <div style={{ fontSize: '12px' }}>
        Name: {data?.data?.name}
        &nbsp;&nbsp;&nbsp;
        <LogoutButton/>
        <button onClick={handleProfile}>profile</button>

        <ul>
          <li><a href={'/users'}>Users</a></li>
          <li><a href={'/users/create'}>Create</a></li>
        </ul>
        ----
        <p>Id: {data?.data?.id}</p>
        <p>Name: {data?.data?.name}</p>
        <p>Email: {data?.data?.email}</p>
      </div>
    </div>
  );
}
export default authConnect(Home);
