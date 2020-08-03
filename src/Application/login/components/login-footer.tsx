import React, {Component} from 'react';
import styled from 'styled-components';
import classNames from "classnames";


class loginFooter extends Component<any, any> {
  constructor(props: any) {
    super(props);

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {'login-footer': true})}>
      <span>备案信息</span>
    </div>;
  }

}

const StyleLoginFooter = styled(loginFooter)`
 &{
 }
  `;

export default StyleLoginFooter
