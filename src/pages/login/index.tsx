import { useNavigate } from 'react-router';
import GoogleLogin from 'react-google-login';
import { useForm } from 'react-hook-form';
import { useAuth } from 'src/redux/hooks/auth/use_auth';
import { useEffect } from 'react';
import { Layout, LayoutItem } from 'src/components/organisms/layout';

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

  return (
    <Layout>
      <LayoutItem
        type={'layout-main'}
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <form onSubmit={handleSubmit(handleLogin)} name={'user'}>
          <div style={{ marginBottom: '10px' }}>
            <p>User name:</p>
            <input {...register('username')} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p>Password:</p>
            <input {...register('password')} type={'password'}/>
          </div>
          <div>
            <button type={'submit'} style={{
              display: 'block',
              marginBottom: '10px'
            }}>Login
            </button>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </form>
      </LayoutItem>
    </Layout>
  );
};

export default Login;
