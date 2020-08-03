import * as types from './actions-types';
import state from "./state";

export default {
  login(previousState: any = state, action: any) {
    switch (action.type) {
      case types.LOGIN:
        console.log("新的state", Object.assign({}, previousState, {
          user: action.params
        }));
        return Object.assign({}, previousState, {
          user: action.params
        })
      default:
        return previousState === undefined ? null : previousState
    }
  },
}
