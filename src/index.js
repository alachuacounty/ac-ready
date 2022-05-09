import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import TitleContext from './contexts/TitleContext';
import IncidentsContext from './contexts/IncidentsContext';
import BreadCrumbsContext from './contexts/BreadCrumbsContext';

ReactDOM.render(
  <React.StrictMode>
    <IncidentsContext>
      <TitleContext>
        <BreadCrumbsContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BreadCrumbsContext>
      </TitleContext>
    </IncidentsContext>
  </React.StrictMode>,
  document.getElementById('root')
);
