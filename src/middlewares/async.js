export default ({ dispatch }) => {
  return next => action => {
    const { payload } = action

    if (!payload || !payload.then) {
      return next(action)
    }

    payload.then(res =>
      dispatch({ ...action, payload: res })
    )
  }
}
