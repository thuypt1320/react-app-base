import 'src/App.css';
import { login } from 'src/redux/authReducer';
import { useDispatch } from 'react-redux';
import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';

function Login () {
  const dispatch = useDispatch();
  const handleLogin = () => {
    const data = authRepository.login();
    storageService.set(keyStoragesCredential, data);
    dispatch(login());
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
