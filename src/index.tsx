import React from 'react';
import ReactDOM from 'react-dom';
// import {renderRoutes} from "react-router-config";
// import {BrowserRouter} from "react-router-dom";
import './index.scss';
import StyledApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <StyledApp/>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA   "typescript": "^3.7.5"
serviceWorker.unregister();

