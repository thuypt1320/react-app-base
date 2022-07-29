import './App.css';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';

function App () {
  const element = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  return element;
}

export default App;
