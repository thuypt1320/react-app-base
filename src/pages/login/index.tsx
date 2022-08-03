import 'src/App.css';
import { useNavigate } from 'react-router';
import { LOGIN } from 'src/redux/types/auth_action_types';
import { connect } from 'react-redux';
import { stores } from 'src/redux/stores';
import { useState } from 'react';

const Login = ({
  // eslint-disable-next-line react/prop-types
  login
}) => {
  const [credential, setCredential] = useState(stores.getState().auth);

  const navigator = useNavigate();

  const handleLogin = () => {
    login();
    stores.subscribe(() => {
      setCredential(stores.getState().auth);
    });

    !credential.loading && navigator('/');
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

const mapDispatch = () => {
  return {
    login: () => {
      stores.dispatch({ type: LOGIN });
      stores.subscribe(() => stores.getState().auth);
    }
  };
};

const mapState = () => {
  return {
    data: stores.getState().auth
  };
};

export default connect(mapState, mapDispatch)(Login);
