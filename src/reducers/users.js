import { FETCH_USERS } from '../actions/types'

export default (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_USERS:
      return [ ...state, ...payload ]
    default:
      return state
  }
}
