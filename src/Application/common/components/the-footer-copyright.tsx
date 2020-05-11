import React, {Component} from 'react';
import styled from "styled-components";
import classNames from 'classnames';


class TheFooterCopyright extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <div className={classNames(this.props.className, {footer__copyright: true})}>
      <span className="footer__copyright-text">Copyright © 2014-2018 Evan You</span>
    </div>;
  }

}

const StyleTheFooterCopyright = styled(TheFooterCopyright)`
.footer__copyright{
   &-text{
   color: #dddddd;
  }
 }


  `;

export default StyleTheFooterCopyright
