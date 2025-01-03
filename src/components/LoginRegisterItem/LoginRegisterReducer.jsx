const loginRegisterReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        loading: false,
        error: null,
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null,
      }
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        isLogin: !state.isLogin,
      }
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state
  }
}

export default loginRegisterReducer