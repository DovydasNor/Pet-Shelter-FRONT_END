const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      console.log('Reducer setting field:', action.field, 'to', action.value)
      return { ...state, [action.field]: action.value }
    case 'RESET_FORM':
      console.log('Reducer resetting form')
      return { type: '', name: '', bread: '', description: '' }
    case 'LOADING':
      return { ...state, loading: true }
    case 'ERROR':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export default formReducer