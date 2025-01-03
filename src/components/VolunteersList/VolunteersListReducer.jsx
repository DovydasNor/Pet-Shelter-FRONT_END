export const volunteersListReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VOLUNTEERS':
      return { ...state, volunteers: action.payload, loading: false }
    case 'LOADING':
      return { ...state, loading: true }
    case 'ERROR':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
  }