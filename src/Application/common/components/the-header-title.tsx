import React, {Component} from 'react';
import styled from "styled-components";
import classNames from 'classnames';


class TheHeaderTitle extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {header__title: true})}>
      <span>演示平台</span>
    </div>;
  }

}

const StyleTheHeaderTitle = styled(TheHeaderTitle)`
  font-size: 18px;
  color: #ffffff;
  `;


export default StyleTheHeaderTitle
