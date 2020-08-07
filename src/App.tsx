import React, {Component} from 'react';
import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter, HashRouter, Route, Redirect, Switch} from "react-router-dom";
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {reduxs} from "./Application";
import GlobalStyle from "./GlobalStyle";
import stylesVariables from './styles-variables';

import StyleMain from "./Application/main";

import {routes as login} from "./Application/login";

const AppRedux = combineReducers(reduxs);
const store = createStore(
  AppRedux, applyMiddleware(thunk)
)

class App extends Component<any, any> {
  render() {
    return <ThemeProvider theme={{Variables: stylesVariables}}>
      <React.Fragment>
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route path="/" component={StyleMain}></Route>

              <Route exact path={login.path} component={login.component}></Route>

              <Route path='/404'/>
              <Redirect  to='/login' from='/'/>
              <Redirect to='/404'/>
            </Switch>
          </HashRouter>

        </Provider>
        <GlobalStyle></GlobalStyle>
      </React.Fragment>
    </ThemeProvider>

  }
}

function generateRoute(route: any) {
  if (route.children) {
    return (
      <Route key={route.path} path={route.path}>
        <route.component>
          {
            route.children.map((item: any) => {
              console.log("遍历的子组件", item);
              return generateRoute(item)
            })
          }
        </route.component>
      </Route>
    )
  }
  return <Route key={route.path} path={route.path} component={route.component}/>
}

const StyledApp = styled(App)`
  &{
  display: flex;
  height: 100vh;
  }
`;

export default StyledApp;
