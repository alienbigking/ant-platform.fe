import React, {Component} from 'react';
import styled from "styled-components";
import classNames from 'classnames';

import StyleTheHeaderTitle from "./the-header-title"

class TheHeader extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {header: true})}>
      <StyleTheHeaderTitle></StyleTheHeaderTitle>
    </div>;
  }

}

const StyleTheHeader = styled(TheHeader)`

  `;


export default StyleTheHeader
