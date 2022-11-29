/* eslint-disable react/prop-types */
import './App.css';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';
import { Auth } from 'src/components/organisms/auth';
import HomePage from 'src/pages/home';
import ConicGradient from 'src/components/conicGradient';
import ContentEditable from 'src/components/contentEditable';

function App () {
  return useRoutes([
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/home',
      element: <Auth><HomePage/></Auth>
    },
    {
      path: '/conic-gradient',
      element: <ConicGradient/>
    },
    {
      path: '/',
      element: <ContentEditable/>
    }
  ]);
}

export default App;
