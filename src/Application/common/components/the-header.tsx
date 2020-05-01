import React, {Component} from 'react';
import {Button} from 'antd';
import styled from "styled-components";


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

// const StyleButton = styled(Button)`
//   font-size: 16px;
//   text-align: center;
//   `;
//
// const StyleH1 = styled.h1`
//   font-size: 60px;
//   text-align: center;
//   `;

export default loginBody
