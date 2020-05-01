import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';

interface State {
  count: string;
}

class TheContentBreadcrumb extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: State = {
    count: ""
  }

  componentDidMount() {
    console.log("渲染完成")
    this.setState({
      count: 3
    })
    console.log("state", this.state.count)
  }

  componentWillUnmount() {
    console.log("将要卸载");
  }

  render() {
    return <Breadcrumb className={classNames(this.props.className, {breadcrumb: true})}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
      ;
  }

}

// 参考
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

const StyleTheContentBreadcrumb = styled(TheContentBreadcrumb)`
  &{
    display: flex;
    flex-direction: column;
     div{
       color:pink;
     }
  }
  `;


export default StyleTheContentBreadcrumb
