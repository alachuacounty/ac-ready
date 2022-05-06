import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TitleContext from './contexts/TitleContext';

ReactDOM.render(
  <React.StrictMode>
    <TitleContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TitleContext>
  </React.StrictMode>,
  document.getElementById('root')
);
