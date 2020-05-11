import React, {Component} from 'react';
import styled from 'styled-components';
import classNames from "classnames";


class loginHeader extends Component<any, any> {
  constructor(props: any) {
    super(props);

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {'login-header': true})}>
      <span>欢迎使用！</span>
    </div>;
  }

}

const StyleLoginHeader = styled(loginHeader)`
 &{
 }
  `;

export default StyleLoginHeader
