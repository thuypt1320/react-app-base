/* eslint-disable react/prop-types */
import 'src/App.css';
import { useNavigate } from 'react-router';
import { authConnect, authSelector, subscribe } from 'src/redux/stores';
import { useState } from 'react';
import { updateState } from 'src/utils/updateState';
import { AuthState } from 'src/redux/reducers/auth_reducer';
import GoogleLogin, {
  GoogleLoginResponse
} from 'react-google-login';

const Login = ({
  data,
  login,
  loginGoogle
}) => {
  const [credential, setCredential] = useState<AuthState>(data);

  const navigator = useNavigate();

  const handleLogin = () => {
    login();
    subscribe(() => {
      setCredential(authSelector);
      updateState(credential);
    });
    navigator('/');
  };

  const handleGoogleLoginSuccess = (value: GoogleLoginResponse) => {
    loginGoogle(value);
    subscribe(() => {
      setCredential(authSelector);
      updateState(credential);
    });
    navigator('/');
  };

  const handleGoogleLoginFailure = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={handleLogin}>Login</button>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default authConnect(Login);
