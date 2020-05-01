import React, {Component} from 'react';
// import {Button} from 'antd';
// import styled from "styled-components";

import {renderRoutes} from "react-router-config";
import {BrowserRouter as Router, Redirect, Route, withRouter} from "react-router-dom";

import {routes} from "./Application";

import './App.css';


class App extends Component<any, any> {
  render() {
    return <Router>
      {renderRoutes(routes)}
    </Router>
  }
}


// const StyleButton = styled(Button)`
//   font-size: 16px;
//   text-align: center;
//   `;
//
// const StyleH1 = styled.h1`
//   font-size: 60px;
//   text-align: center;
//   `;

// const StyledApp = styled(App)`
//   &{
//     background:red;
//     h1{
//       color:blue;
//     }
//   }
// `;

export default App;
