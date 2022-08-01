import './App.css';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';
import Users from 'src/pages/home/users';
import User from 'src/pages/home/users/detail';

function App () {
  const element = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/users',
      element: <Users/>
    },
    {
      path: '/users/:id',
      element: <User/>
    }
  ]);

  return element;
}

export default App;
