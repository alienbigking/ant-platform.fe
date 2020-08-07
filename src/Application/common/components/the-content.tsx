import React, {Component} from 'react';
import styled from "styled-components";
import classNames from 'classnames';
import {Route, Switch,Link } from "react-router-dom";

import StyleTheContentBreadcrumb from "./the-content-breadcrumb";
import StyleUserList from "../../user/components/user-list";

class TheContent extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const children = this.props.children;
    console.log("子组件",this.props);
    console.log("the-content", this.props);

    return <div className={classNames(this.props.className, {content: true})}>
      <StyleTheContentBreadcrumb></StyleTheContentBreadcrumb>
      <div className={classNames('content__main')}>
        {this.props.children}
      </div>
    </div>
      ;
  }

}

const StyleTheContent = styled(TheContent)`
  &{
    display: flex;
    flex-direction: column;
    .content__main{
       display: flex;
       flex-direction: column;
       margin: 20px;
       background-color: #ffffff;
       min-height: 100px;
       max-height: 100%;
       border-radius: 8px;
       padding: 0 20px;
    }
  }
  `;

export default StyleTheContent
