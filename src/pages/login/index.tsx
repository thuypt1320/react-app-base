/* eslint-disable react/prop-types */
import 'src/App.css';
import { useNavigate } from 'react-router';
import GoogleLogin from 'react-google-login';
import { useForm } from 'react-hook-form';
import { useAuth } from 'src/hooks/use_auth';
import { useEffect } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const {
    data,
    login,
    loading
  } = useAuth();
  const navigator = useNavigate();
  useEffect(() => {
    data?.access_token && navigator('/');
  }, [data]);

  const handleLogin = (formValue) => {
    login(formValue);
  };

  const handleGoogleLoginSuccess = () => {
    login({ type: 'google' });
  };

  const handleGoogleLoginFailure = (error) => {
    console.log(error);
  };

  if (loading) return <div>Loading</div>;
  return (
    <div className="App">
      <div className="App-header">
        <div style={{ fontSize: '12px' }}>
          <form onSubmit={handleSubmit(handleLogin)} name={'user'}>
            <div>
              <label>username</label>
              <input {...register('username')} defaultValue={''}/>
            </div>
            <div>
              <label>password</label>
              <input {...register('password')} defaultValue={''}/>
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

export default Login;
