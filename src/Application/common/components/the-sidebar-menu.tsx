import React, {Component} from 'react';
import {Menu} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';

const {SubMenu} = Menu;

class TheSidebarMenu extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onNavigate() {

  }

  render() {
    return <Menu
      onClick={this.onNavigate}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className={classNames(this.props.className, {sidebar__menu: true})}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
              <span>Navigation One</span>
            </span>
        }
      >
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
      ;
  }

}

const StyleTheSidebarMenu = styled(TheSidebarMenu)`
  font-size: 16px;
  text-align: center;
  `;

export default StyleTheSidebarMenu
