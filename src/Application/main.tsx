import React, {Component} from 'react';
import {Layout, Menu} from 'antd';

const {Header, Footer, Sider, Content} = Layout;


class main extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    console.log("渲染完成")
  }

  componentWillUnmount() {
    console.log("将要卸载");
  }

  render() {
    return <Layout style={{minHeight: '100vh'}}>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>;
  }

}


export default main
