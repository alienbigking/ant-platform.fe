import React, {Component} from 'react';
import {Button, Table, Tag, Space} from 'antd';
import styled from "styled-components";
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../redux/actions';

import StyleTheContent from "../../common/components/the-content";
import StyleMain from "../../main";

interface State {
  pagination: object;
  user: object,
  loading: boolean,
  searching: boolean,
}

class UserList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    //  this.state = { demo: 0 };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: State = {
    pagination: {
      page: 1,
      size: 10,
      sort: {prop: "createdTime", order: "descending"}
    },
    user: {},
    loading: false,
    searching: false,
  }

  componentDidMount() {
    console.log("props", this.props);
    this.setState({
      user: this.props.pagedUsers
    })
  }

  componentWillUnmount() {
  }

  render() {
    const columns = [
      {
        title: '账号',
        dataIndex: 'username',
        key: 'username',
        render: (text: string) => <a>{text}</a>,
      },
      {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
      },
      {
        title: '手机号码',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
      },
      {
        title: '创建时间',
        key: 'createdTime',
        dataIndex: 'createdTime',
        render: (text: any) => (
          <>
            {
              text
            }
          </>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text: any, record: any) => (
          <Space size="middle">
            <a>Invite</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: 'username',
        nickname: 'John Brown',
        phoneNumber: 18906501114,
        createdTime: '2020-4-30 11:20:01',
      },
      {
        key: 'nickname',
        nickname: 'Jim Green',
        phoneNumber: 18906501126,
        createdTime: '2020-4-30 11:20:01',
      },
      {
        key: 'phoneNumber',
        nickname: 'Joe Black',
        phoneNumber: 18906501122,
        createdTime: '2020-4-30 11:20:01',
      },
    ];
    return <div className={classNames(this.props.className, {"user-list": true})}>
      <Table columns={columns} dataSource={data}/>
    </div>
      ;
  }

}

function mapStateToProps(state: any) {
  return {
    pagedUsers: state.user.pagedUsers
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const StyleUserList = styled(UserList)`
  &{
    display: flex;
    flex-direction: column;
  }
  `;

export default connect(mapStateToProps, mapDispatchToProps)(StyleUserList)
