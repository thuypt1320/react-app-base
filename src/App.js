import './App.css';
import Login from 'src/pages/login/login';
import Home from 'src/pages/home/home';
import { authSelector } from 'src/redux/stores';
import { useSelector } from 'react-redux';

function App () {
  const authValue = useSelector(authSelector);
  return authValue
    ? <Home/>
    : <Login/>;
}

export default App;
