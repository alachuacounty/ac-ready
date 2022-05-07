import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import TitleContext from './contexts/TitleContext';
import IncidentsContext from './contexts/IncidentsContext';

ReactDOM.render(
  <React.StrictMode>
    <IncidentsContext>
      <TitleContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TitleContext>
    </IncidentsContext>
  </React.StrictMode>,
  document.getElementById('root')
);
