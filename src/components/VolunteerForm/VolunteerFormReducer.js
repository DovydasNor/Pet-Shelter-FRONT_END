export const volunteerFormReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'RESET_FORM':
      return { name: '', email: '' }
    case 'LOADING':
      return { ...state, loading: true }
    case 'ERROR':
      return { ...state, error: action.payload, loading: false }
    case 'ADD_VOLUNTEER':
      return { ...state, volunteer: action.payload, loading: false }
    case 'UPDATE_VOLUNTEER':
      return { ...state, volunteer: action.payload, loading: false }
    case 'SET_SINGLE_VOLUNTEER':
      return { ...state, ...action.payload, loading: false }
    default:
      return state
  }
}