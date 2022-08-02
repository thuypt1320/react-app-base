import 'src/App.css';
import { useNavigate } from 'react-router';
import { dispatch } from 'src/redux/stores';
import { LOGIN } from 'src/redux/auth_types';

function Login () {
  const navigator = useNavigate();

  const handleLogin = () => {
    dispatch({ type: LOGIN });
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
