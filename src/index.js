import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import MyProvider from './context/MyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
    <AppRoutes />
  </MyProvider>
);
