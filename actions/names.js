export const setNames = () => dispatch => {
  return setTimeout(() => {
    return dispatch({
      type: 'NEW_NAMES',
      data: [ 'Antonio', 'Mundo', 'Felipe' ]
    })
  }, 800)
}
