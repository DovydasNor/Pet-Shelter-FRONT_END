const commentingReducer = (state, action) => {
    switch(action.type) {
      case 'LOADING_COMMENTS':
        return {
          ...state,
          loading: true,
          error: null
        }
      case 'SET_COMMENTS':
        return {
          ...state,
          loading: false,
          comments: action.payload
        }
      case 'ADD_COMMENT':
        return {
          ...state,
          loading: false,
          comments: [...state.comments, action.payload]
        }
      case 'ERROR_COMMENTS':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default:
        return state
    }
  }
  
  export default commentingReducer