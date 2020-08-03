import React, {Component} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styled from "styled-components";
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../redux/actions';

interface State {
  user: object
}

class loginBody extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onLogin = this.onLogin.bind(this);
    // console.log("属性props", this.props);

  }

  state: State = {
    user: {
      username: "欧阳伟",
      password: "123456",
      mode: "account_password"
    }
  }

  componentDidMount() {
    console.log("组件渲染完成", this.props);
  }

  componentWillUnmount() {
  }

  onFinish() {
    console.log("表单加载完成");
  }

  onLogin() {
    console.log("点击登录", this.state)
    this.props.actions.login(this.state.user)
  }

  render() {
    console.log("render渲染", this.props);
    return <div className={classNames(this.props.className, {"login-body": true})}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={this.onFinish}
      >
        <Form.Item
          className="login-form-username"
          name="username"
          rules={[{required: true, message: '请输入用户名!'}]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
        </Form.Item>
        <Form.Item
          className="login-form-password"
          name="password"
          rules={[{required: true, message: '请输入密码 !'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon"/>}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          className="login-form-password-checkbox"
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </Form.Item>
        <Form.Item
          className="login-form-submit"
        >
          <Button type="primary" htmlType="submit" onClick={this.onLogin} className="login-form-button">
            登录
          </Button>
          <a className="login-form-register" href="">现在注册!</a>
        </Form.Item>
      </Form>
    </div>;
  }

}

function mapStateToProps(state: any) {
  console.log("作为组件props", state);
  return {
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const StyleLoginBody = styled(loginBody)`
 &{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  border: 1px solid #dddddd;
  border-radius: 8px;

 }

 .login-form{
  width:280px;
  &-forgot{
  float: right;
  color: ${props => {
  return props.theme.Variables['$color-primary']
}};
  }
  &-register{
  float: right;
  height: 32px;
  line-height: 32px;
  color: ${props => {
  return props.theme.Variables['$color-primary']
}};
  }
  &-submit{
  display: flex;
  align-items: center;
  }
 }
  `;


export default connect(mapStateToProps, mapDispatchToProps)(StyleLoginBody)
