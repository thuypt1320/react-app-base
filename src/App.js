/* eslint-disable react/prop-types */
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
      path: '/login',
      element: <Login/>
    },
    {
      path: '/',
      element: <Home/>
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

  // return <Home/>;
  return element;
}

export default App;
