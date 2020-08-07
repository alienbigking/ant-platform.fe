import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import StyledApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <StyledApp/>,
  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

