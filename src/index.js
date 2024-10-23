import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles (if any)
import App from './App'; // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Make sure this matches the div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
