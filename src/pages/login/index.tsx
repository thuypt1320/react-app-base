/* eslint-disable react/prop-types */
import 'src/App.css';
import { useNavigate } from 'react-router';
import {
  authConnect,
  AuthConnectProps,
  authSelector,
  subscribe
} from 'src/redux/stores';
import { useState } from 'react';
import { updateState } from 'src/utils/updateState';
import { AuthState } from 'src/redux/reducers/auth_reducer';
import GoogleLogin, {
  GoogleLoginResponse
} from 'react-google-login';
import { formValue } from 'src/utils/formValue';

const Login = ({
  login,
  loginGoogle
}: AuthConnectProps) => {
  const [credential, setCredential] = useState<AuthState>(authSelector);

  const navigator = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    login(formValue(e));
    subscribe(() => {
      setCredential(authSelector);
      updateState(credential);
    });
    credential.data.name && navigator('/');
  };

  const handleGoogleLoginSuccess = (value: GoogleLoginResponse) => {
    loginGoogle(value);
    subscribe(() => {
      setCredential(authSelector);
      updateState(credential);
    });
  };

  const handleGoogleLoginFailure = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div style={{ fontSize: '12px' }}>
          <form onSubmit={handleLogin} name={'user'}>
            <div>
              <label>username</label>
              <input name={'username'} defaultValue={''}/>
            </div>
            <div>
              <label>password</label>
              <input name={'password'} defaultValue={''}/>
            </div>
            <button type={'submit'}>Login</button>
          </form>
        </div>
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
