import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from "./module-1/components/Counter/Counter";
import SearchForm from './module-1/components/SearchForm/SearchForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([
  <Counter key="counter" initialValue="1" />,
  <SearchForm key="searchForm" initialValue="Start" />,
]);

reportWebVitals();

