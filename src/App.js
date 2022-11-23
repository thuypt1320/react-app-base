/* eslint-disable react/prop-types */
import './App.css';
import Login from 'src/pages/login';
import { useRoutes } from 'react-router';
import { Auth } from 'src/components/organisms/auth';
import HomePage from 'src/pages/home';

function getDegree (val, total) {
  return (val / total) * 360 || 0;
}

function getTurn (val, total) {
  return (val / total) || 0;
}

function getTotal (values) {
  return values.reduce((a, b) => a + b, 0);
}

function background (colors, values) {
  const total = getTotal(values);

  return values
    .map((val, idx) => {
      const prevValue = getTotal(values.slice(0, idx));
      return `${colors[idx]} ${getDegree(prevValue, total)}deg ${getDegree(prevValue, total) + getDegree(val, total)}deg`;
    })
    .join(', ');
}

function backgroundTurn (colors, values) {
  const total = getTotal(values);

  return values
    .map((val, idx) => {
      const prevValue = getTotal(values.slice(0, idx));
      return `${colors[idx]} ${getTurn(prevValue, total)}turn ${getTurn(prevValue, total) + getTurn(val, total)}turn`;
    })
    .join(', ');
}

function App () {
  // return useRoutes([
  //   {
  //     path: '/login',
  //     element: <Login/>
  //   },
  //   {
  //     path: '/',
  //     element: <Auth><HomePage/></Auth>
  //   }
  // ]);
  const values = [50, 50, 50, 50, 50];
  const colors = ['blue', 'red', 'yellow', 'green', 'lightblue', 'lightyellow', 'lightpink', 'lightgreen'];

  return (
    <div>
      <div className={'box'}
           style={{
             background: `conic-gradient(${backgroundTurn(colors, values)})
             `
           }}
      />
      <div className={'cell'}/>
    </div>
  );
}

export default App;
