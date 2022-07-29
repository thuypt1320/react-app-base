import 'src/App.css';
import { useSelector } from 'react-redux';
import { authSelector } from 'src/redux/stores';
import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { useNavigate } from 'react-router';
export default function Home () {
  const profile = useSelector(authSelector);
  const navigator = useNavigate();
  const handleLogout = async () => {
    await authRepository.logout();
    storageService.remove(keyStoragesCredential);
    navigator('/login');
  };

  return (
    <div className="App">
      <div className="App-header">
        <p style={{ color: '#000' }}>Name: {profile?.name}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
