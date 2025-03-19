import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from "./module-1/components/Counter/Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(Counter, { initialValue: 1 })
);

reportWebVitals();
