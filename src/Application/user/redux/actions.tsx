import * as types from './actions-types';
import {userService} from '../services';

export default {
  getUser(params: any) {
    return (dispatch: any) => {
      userService.get(params).then((user: any) => {
        dispatch({
          type: types.SET_USER,
          user: user
        });
      });
    }
  },
  getPagedUsers(params: any) {
    return (dispatch: any) => {
      userService.getPaged(params).then((users: any) => {
        dispatch({
          type: types.SET_PAGED_USERS,
          pagedUsers: users
        });
      });
    }
  },
  addUser(user: object) {
    return (dispatch: any) => {
      userService.add(user);
    }
  },
  updateUser(user: object) {
    return (dispatch: any) => {
      userService.update(user);
    }
  },
  deleteUser(id: string | number) {
    return (dispatch: any) => {
      userService.delete(id);
    }
  },
}
