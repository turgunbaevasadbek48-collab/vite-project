import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import * as StoreModule from './components/axios/store'; 

const finalStore = StoreModule.default || StoreModule.store || StoreModule;

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={finalStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </StrictMode>
);