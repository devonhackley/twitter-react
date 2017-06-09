import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes.js';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Routes history={ history } children={Routes} />,
  document.getElementById('root')
)
