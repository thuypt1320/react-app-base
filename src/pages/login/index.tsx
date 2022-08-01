import 'src/App.css';
import { useNavigate } from 'react-router';
import { useLoginMutation } from 'src/services/authService';

function Login () {
  const navigator = useNavigate();
  const [login] = useLoginMutation();
  const handleLogin = async () => {
    try {
      await login({});
      navigator('/');
    } catch (e) {
      /**/
    }
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
