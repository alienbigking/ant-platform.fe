import React, {Component} from 'react';
import {Button} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../redux/actions';

interface State {
    count: number;
}

class DemoTest extends Component<any, any> {
    constructor(props: any) {
        super(props);
        //  this.state = { demo: 0 };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    state: State = {
        count: 1
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return <div className={classNames(this.props.className, {demo: true})}>
            <Button type="primary">Demo</Button>
        </div>;
    }

}

function mapStateToProps(state: any) {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const StyleDemoTest = styled(DemoTest)`
  &{
    display: flex;
    flex-direction: column;
  }
  `;

export default connect(mapStateToProps, mapDispatchToProps)(StyleDemoTest)
