import './App.css';
import Login from 'src/pages/login';
import { useReducer } from 'react';
import { authReducer } from 'src/redux/authReducer';
import { useNavigate } from 'react-router-dom';

function App () {
  const [state, dispatch] = useReducer(authReducer, { status: false });
  const navigator = useNavigate();

  return <Login onClick={() => navigator('./pages/home', { replace: true })}/>;
}

export default App;
