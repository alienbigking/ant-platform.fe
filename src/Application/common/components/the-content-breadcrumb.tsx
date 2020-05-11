import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';

interface State {
  breadcrumbs: string[];
}

class TheContentBreadcrumb extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.onNavigation = this.onNavigation.bind(this);
  }

  state: State = {
    breadcrumbs: []
  }

  componentDidMount() {
    console.log("渲染完成")
    this.setState({
      breadcrumbs: []
    })
    console.log("state", this.state.breadcrumbs)
  }

  componentWillUnmount() {
    console.log("将要卸载");
  }

  onNavigation() {
    console.log("面包屑导航");
  }

  render() {
    return <Breadcrumb className={classNames(this.props.className, {breadcrumb: true})}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="baidu.com">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="baidu.com">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
      ;
  }

}

// 参考
// interface DemoConstraint {
//   name: string;
//   age?: number;
// }
//
// class Demo<T extends DemoConstraint> {
//   private name: string;
//   private age: number;
//   // 仅当类被实例化的时候才会被初始化的属性，通过类名 className.来访问属性，也可以用this
//   static origin: any;
//   add: (x: T, y: T) => T;
//
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age
//     this.add = function (x, y) {
//       return x;
//     }
//   }
// }
//
// let demo = new Demo<DemoConstraint>("oyw1", 1);
// demo.add({name: 'oyw2'}, {name: 'oyw3', age: 3});

const StyleTheContentBreadcrumb = styled(TheContentBreadcrumb)`
  &{
    height: 34px;
    line-height: 34px;
    background-color: #ffffff;
    margin: 0 20px;
    padding: 0 20px;
  }
  `;


export default StyleTheContentBreadcrumb
