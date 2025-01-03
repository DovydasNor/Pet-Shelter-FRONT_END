const userProfileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return { ...state, user: action.payload, loading: false, error: null }
    case 'LOADING':
      return { ...state, loading: true }
    case 'ERROR':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export default userProfileReducer