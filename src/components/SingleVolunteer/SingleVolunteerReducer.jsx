export const singleVolunteerReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SINGLE_VOLUNTEER':
        return { ...state, volunteer: action.payload, loading: false }
      case 'LOADING':
        return { ...state, loading: true }
      case 'ERROR':
        return { ...state, error: action.payload, loading: false }
      default:
        return state
    }
  }