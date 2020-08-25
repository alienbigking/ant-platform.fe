import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import StyledApp from './App';
import * as serviceWorker from './serviceWorker';

import axios from "axios";
import RequestInterceptor from "../src/Application/utils/interceptor/request-interceptor";
import ResponseInterceptor from "../src/Application/utils/interceptor/response-interceptor";

const requestInterceptor = new RequestInterceptor();
requestInterceptor.config(axios);
const responseInterceptor = new ResponseInterceptor();
responseInterceptor.config(axios);


ReactDOM.render(
  // <React.StrictMode>
  <StyledApp/>,
  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

