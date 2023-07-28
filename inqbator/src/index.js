import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import DataProvider from './context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='120795696673-7jpr4mim17f10lh4i2j060q66u9ap5oh.apps.googleusercontent.com'>
      <DataProvider>
        <App />
      </DataProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

