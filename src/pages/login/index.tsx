import 'src/App.css';
import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { useNavigate } from 'react-router';

function Login () {
  const navigator = useNavigate();
  const handleLogin = async () => {
    const credential = await authRepository.login();
    storageService.set(keyStoragesCredential, credential);
    navigator('/');
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
