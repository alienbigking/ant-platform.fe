import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import styled from "styled-components";
import classNames from "classnames";
import {Route, Switch} from "react-router-dom";

import {components as commonComponents} from "./common";

import routes from "./routes";

const {Header, Footer, Sider, Content} = Layout;


class Main extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <Layout className={classNames(this.props.className, {main: true})} style={{minHeight: '100vh'}}>
      <Header className={classNames({main__header: true})}>
        <commonComponents.StyleTheHeader></commonComponents.StyleTheHeader>
      </Header>
      <Layout className={classNames({main__body: true})}>
        <Sider className={classNames({main__sidebar: true})}>
          <commonComponents.StyleTheSidebar></commonComponents.StyleTheSidebar>
        </Sider>
        <Content className={classNames({main__content: true})}>
          <commonComponents.StyleTheContent>
            <Switch>
              {
                routes.map((route,index) => {
                  return <Route  exact key={index} path={route.path} component={route.component}/>
                })
              }
            </Switch>
          </commonComponents.StyleTheContent>
          <Footer className={classNames({main__footer: true})}>
            <commonComponents.StyleTheFooter></commonComponents.StyleTheFooter>
          </Footer>
        </Content>
      </Layout>
    </Layout>;
  }

}

const StyleMain = styled(Main)`
background-color: #edeef2 !important;
  .main{
    &__header{
      background-color: #006df0;
    }
    &__body{
      height: 100%;
      background-color: #edeef2 !important;
    }
    &__sidebar{
      background-color: #ffffff;
    }
    &__content{
    position: relative;
    padding: 20px 0px;
    }
    &__footer{
      position: absolute;
      bottom: 0;
      left: 20px;
      background-color: #edeef2;
    }
  }
  `;

export default StyleMain
