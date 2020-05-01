import React, {Component} from 'react';
import {Button} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';

import StyleTheContentBreadcrumb from "./the-content-breadcrumb";

class theContent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {demo: null}
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(): any {
    console.log("渲染完成")
  }

  componentWillUnmount(): any {
    console.log("将要卸载");
  }

  handleChange(): any {
    // 当数据源更新时，更新组件状态
    this.setState({
      demo: null
    });
  }

  render() {
    const children = this.props.children;
    console.log("props是什么", this.props);

    return <div className={classNames(this.props.className, {content: true})}>
      <StyleTheContentBreadcrumb></StyleTheContentBreadcrumb>
      <div className={classNames('content__main')}>
        {children}
      </div>
    </div>;
  }

}

interface DemoConstraint {
  name: string;
  age?: number;
}

class Demo<T extends DemoConstraint> {
  private name: string;
  private age: number;
  // 仅当类被实例化的时候才会被初始化的属性，通过类名 className.来访问属性，也可以用this
  static origin: any;
  add: (x: T, y: T) => T;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
    this.add = function (x, y) {
      return x;
    }
  }
}

let demo = new Demo<DemoConstraint>("oyw1", 1);
demo.add({name: 'oyw2'}, {name: 'oyw3', age: 3});


const StyleTheContent = styled(theContent)`
  &{
    display: flex;
    flex-direction: column;
    div{
      font-size:${props => props.fontSize};
      color:pink;
    }
  }
  `;

export default StyleTheContent
