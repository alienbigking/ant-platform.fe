import React, {Component} from 'react';
import styled from "styled-components";
import classNames from 'classnames';

import StyleTheFooterCopyright from "./the-footer-copyright";

class TheFooter extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {footer: true})}>
      <StyleTheFooterCopyright></StyleTheFooterCopyright>
    </div>;
  }

}

const StyleTheFooter = styled(TheFooter)`

  `;


export default StyleTheFooter
