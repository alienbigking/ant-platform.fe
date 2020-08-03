import React, {Component} from 'react';
import styled, {ThemeProvider} from "styled-components";
// import {renderRoutes} from "react-router-config";
import {BrowserRouter, Route, Redirect, withRouter, Switch} from "react-router-dom";
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {routes, reduxs} from "./Application";
import GlobalStyle from "./GlobalStyle";
import stylesVariables from './styles-variables';
import StyleMain from "./Application/main";
import StyleLogin from "./Application/login/components/login";
import StyleUserList from "./Application/user/components/user-list";
import StyleTheContent from "./Application/common/components/the-content";

const AppRedux = combineReducers(reduxs);
const store = createStore(
  AppRedux, applyMiddleware(thunk)
)

class App extends Component<any, any> {
  render() {

    return <ThemeProvider theme={{Variables: stylesVariables}}>
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              {routes.map((route: any, i) => {
                console.log("路由渲染", route);
                return <Route
                  key={i}
                  path={route.path}
                  exact
                  render={props => {
                    // console.log("路由渲染props", props)
                    return <route.component {...props} routes={route.routes}/>
                  }
                  }
                />
              })}

              <Route path='/404'/>
              <Redirect exact to='/admin' from='/'/>
              <Redirect to='/404'/>
            </Switch>

            {/*<Switch>*/}


            {/*  <Route exact path="/user/list" component={StyleUserList}></Route>*/}


            {/*</Switch>*/}

          </BrowserRouter>
        </Provider>
        <GlobalStyle></GlobalStyle>
      </React.Fragment>
    </ThemeProvider>

  }
}


const StyledApp = styled(App)`
  &{
  display: flex;
  height: 100vh;
  }
`;

export default StyledApp;
