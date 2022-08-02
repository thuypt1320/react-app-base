import './App.css';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';
import Users from 'src/pages/home/users';
import User from 'src/pages/home/users/detail';
import UserForm from 'src/pages/home/users/create';

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
    },
    {
      path: '/users/create',
      element: <UserForm/>
    }
  ]);

  return element;
}

export default App;
