import React, {Component} from 'react';
import styled from 'styled-components';
import {Button} from 'antd';


class loginBody extends Component<any, any> {
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
    return <div>
      <Button type="primary">测试按钮</Button>
    </div>;
  }

}


export default loginBody
