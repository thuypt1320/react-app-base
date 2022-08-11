import 'src/App.css';
import { LogoutButton } from 'src/components/molecules/logout_button';
import { useAuth } from 'src/hooks/use_auth';

function Home () {
  const {
    data,
    getProfile
  } = useAuth();

  const handleProfile = () => {
    getProfile();
  };

  return (
    <div>
      <div style={{ fontSize: '12px' }}>
        Name: {data?.user?.name}
        &nbsp;&nbsp;&nbsp;
        <LogoutButton/>
        <button onClick={handleProfile}>profile</button>

        <ul>
          <li><a href={'/users'}>Users</a></li>
          <li><a href={'/users/create'}>Create</a></li>
        </ul>
        ----
        <p>Id: {data?.user?.id}</p>
        <p>Name: {data?.user?.name}</p>
        <p>Email: {data?.user?.email}</p>
      </div>
    </div>
  );
}
export default Home;
