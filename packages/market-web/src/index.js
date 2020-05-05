// import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { GlobalContextProvider } from './context';

ReactDOM.render(
  <GlobalContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </GlobalContextProvider>,
  document.getElementById('root')
);