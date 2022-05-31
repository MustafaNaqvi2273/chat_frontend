import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import RouteProvider from './routeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>
);

reportWebVitals();
