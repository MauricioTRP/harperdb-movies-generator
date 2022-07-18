import React from 'react';
import ReactDOM from 'react-dom';  // Línea modificada
import './index.css';
import App from './App';
import { HarperDBProvider } from 'use-harperdb/useHarperDB';
import reportWebVitals from './reportWebVitals';


// Renderizado en DOM
ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider
    url={process.env.REACT_APP_DB_URL}
    user={process.env.REACT_APP_USER}
    password={process.env.REACT_APP_PASSWORD}
    >
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
