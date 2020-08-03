import React, {Component} from 'react';
import {Layout, Button} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';

import StyleLoginHeader from "./login-header";
import StyleLoginBody from "./login-body";
import StyleLoginFooter from "./login-footer";

const {Header, Footer, Content} = Layout;


interface State {
  count: number;
}

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: State = {
    count: 1
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {login: true})}>
      <Header className="login__header">
        <StyleLoginHeader></StyleLoginHeader>
      </Header>
      <Content className="login__body">
        <StyleLoginBody></StyleLoginBody>
      </Content>
      <Footer className="login__footer">
        <StyleLoginFooter></StyleLoginFooter>
      </Footer>
    </div>;
  }

}

const StyleLogin = styled(Login)`
  &{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  }
  .login{
  &__header{
     background-color: #006df0;
  }
  &__body{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__footer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px !important;
  }
  }
  `;

export default StyleLogin
