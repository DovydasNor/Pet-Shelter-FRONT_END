const donationsReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'SET_DONATIONS':
      return {
        ...state,
        loading: false,
        donations: Array.isArray(action.payload) ? action.payload : [],
      }
    case 'ADD_DONATION':
      return {
        ...state,
        loading: false,
        donations: [...state.donations, action.payload],
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default donationsReducer