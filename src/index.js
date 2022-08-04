import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { stores } from 'src/redux-toolkit/stores';
import { Provider } from 'react-redux';
import { worker } from './mock/brower';
import { Auth } from 'src/components/organisms/auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={stores}>
          <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <Auth>
              <App/>
            </Auth>
          </GoogleOAuthProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
});
