import '../App.css';

interface LoginProps {
  onClick?: () => void;
}

function Login (props: LoginProps) {
  const { onClick } = props;
  const handleLogin = () => {
    onClick();
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
