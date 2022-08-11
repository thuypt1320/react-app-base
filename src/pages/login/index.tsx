/* eslint-disable react/prop-types */
import 'src/App.css';
import { useNavigate } from 'react-router';
import GoogleLogin from 'react-google-login';
import { useForm } from 'react-hook-form';
import { useAuth } from 'src/hooks/use_auth';
import { useEffect } from 'react';
import { Card } from 'src/components/atoms/card';
import { LayoutItem } from 'src/components/organisms/layout';

const Login = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const {
    data,
    login
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

  // if (loading) return <div>Loading</div>;
  return (
    <LayoutItem
      type={'layout-main'}
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card>
        <form onSubmit={handleSubmit(handleLogin)} name={'user'}>
          <div>
            <label>username</label>
            <input {...register('username')} defaultValue={''}/>
          </div>
          <div>
            <label>password</label>
            <input {...register('password')} defaultValue={''}/>
          </div>
          <div>
            <button type={'submit'} style={{ display: 'block' }}>Login
            </button>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </form>
      </Card>
    </LayoutItem>
  );
};

export default Login;
