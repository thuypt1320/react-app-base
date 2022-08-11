/* eslint-disable react/prop-types */
import './App.css';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';
import Users from 'src/pages/home/users';
import User from 'src/pages/home/users/detail';
import UserForm from 'src/pages/home/users/create';
import { Auth } from 'src/components/organisms/auth';

function App () {
  return useRoutes([
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/',
      element: <Auth><Home/></Auth>
    },
    {
      path: '/users',
      element: <Auth><Users/></Auth>
    },
    {
      path: '/users/:id',
      element: <Auth><User/></Auth>
    },
    {
      path: '/users/create',
      element: <Auth><UserForm/></Auth>
    }
  ]);
}

export default App;
