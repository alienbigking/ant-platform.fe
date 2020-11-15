import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import styled from "styled-components";
import classNames from 'classnames';

import actions from '../redux/actions';
import ParticlesBg from 'particles-bg'
import {default as $route} from '../../utils/route/route';


interface State {
  user: any,
  loading: boolean
}

interface ErrorMessage {
  response:{
    data: {
      message?: string;
    }
  }
}

class loginBody extends Component<any, any> {

  state: State = {
    user: {
      userIdentifier: null,
      credential: null,
      identityType: "password"
    },
    loading: false
  }

  constructor(props: any) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onLogin = this.onLogin.bind(this);
    console.log("props", this.props);
  }

  componentDidMount() {
    // console.log("组件渲染完成", this.props);
  }

  componentWillUnmount() {

  }

  onChangeUsername(event: any) {
    const value = event.target.value;

    this.setState((preState: State) => ({
        user: {...preState.user, userIdentifier: value}
      })
    )

  }

  onChangePassword(event: any) {
    const value = event.target.value;

    this.setState((preState: State) => ({
        user: {...preState.user, credential: value}
      })
    )


  }

  onFinish() {
  }

  onLogin() {
    this.setState({loading: true})
    this.props.actions.login(this.state.user).then(() => {
      message.success("登录成功")
      this.setState({loading: false})
      $route.push('/');

    }).catch(<T extends ErrorMessage>(error: T) => {
        console.log("错误消息", error.response);
        message.error(error.response.data.message)
        this.setState({loading: false})
      }
    )
  }

  render() {
    const particlesBgConfig = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: "center",
      color: ["random", "#ff0000"],
      cross: "dead",
      random: 15,
      g: 5,
      onParticleUpdate: (ctx: any, particle: any) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    }

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
          initialValue={this.state.user.userIdentifier}
          rules={[{required: true, message: '请输入用户名!'}]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                 placeholder="请输入用户名!"
                 onChange={this.onChangeUsername}
          />
        </Form.Item>
        <Form.Item
          className="login-form-password"
          name="password"
          initialValue={this.state.user.credential}
          rules={[{required: true, message: '请输入密码 !'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon"/>}
            type="password"
            placeholder="请输入密码 !"
            onChange={this.onChangePassword}
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
          <Button type="primary" htmlType="submit" onClick={this.onLogin} className="login-form-button"
                  loading={this.state.loading}>
            登录
          </Button>
          <a className="login-form-register" href="">现在注册!</a>
        </Form.Item>
      </Form>
      <ParticlesBg type="color" config={particlesBgConfig} bg={true}/>
    </div>;
  }

}

function mapStateToProps(state: any) {
  console.log("作为组件mapStateToProps", state);
  return {
    mylogin: state.login.user
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
