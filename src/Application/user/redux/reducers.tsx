import * as types from './actions-types';
import state from "./state";

export default {
  user(previousState: any = state, action: any) {
    switch (action.type) {
      case types.SET_USER:
        return Object.assign({}, previousState, {
          user: action.user
        })

      case types.SET_PAGED_USERS:
        return Object.assign({}, previousState, {
          pagedUsers: action.pagedUsers
        })

      default:
        return previousState === undefined ? null : previousState
    }
  },
}
