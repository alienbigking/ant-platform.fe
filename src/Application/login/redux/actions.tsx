import * as types from './actions-types';
import {loginService} from '../services';

export default {
  login(params: any) {
    return (dispatch: any) => {
      console.log("action里的参数", params);

      return loginService.login(params)
      //   .then((data) => {
      //   dispatch({
      //     type: types.LOGIN,
      //     params: data
      //   });
      // });
    }
  },
  register(params: any) {
    return (dispatch: any) => {
      loginService.login(params).then((data) => {
        return {
          type: types.REGISTER,
          params: data
        }
      });
    }
  },
  logout(params: any) {
    return (dispatch: any) => {
      loginService.logout();
      return {
        type: types.LOGOUT,
      }
    }
  }
}
