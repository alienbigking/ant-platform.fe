import React, {Component} from 'react';
import styled from "styled-components";
import classNames from 'classnames';

import StyleTheSidebarMenu from "./the-sidebar-menu";

class TheSidebar extends Component<any, any> {
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
    return <div className={classNames(this.props.className, {sidebar: true})}>
      <StyleTheSidebarMenu></StyleTheSidebarMenu>
    </div>;
  }

}

const StyleTheSidebar = styled(TheSidebar)`

  `;


export default StyleTheSidebar
