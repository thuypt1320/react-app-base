/* eslint-disable react/prop-types */
import './App.css';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';
import { Auth } from 'src/components/organisms/auth';
import HomePage from 'src/pages/home';

function App () {
  return useRoutes([
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/',
      element: <Auth><HomePage/></Auth>
    }
  ]);
}

export default App;
