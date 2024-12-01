const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      console.log('Reducer setting field:', action.field, 'to', action.value)
      return { ...state, [action.field]: action.value }
    case 'RESET_FORM':
      console.log('Reducer resetting form')
      return { type: '', name: '', breed: '', description: '' }
    case 'LOADING':
      console.log('Reducer loading')
      return { ...state, loading: true }
    case 'ERROR':
      console.error('Reducer error:', action.payload)
      return { ...state, error: action.payload, loading: false }
    case 'SET_SINGLE_PET':
      console.log('Reducer setting single pet:', action.payload)
      return { ...state, pet: action.payload, type: action.payload.type, name: action.payload.name, bread: action.payload.breed, description: action.payload.description, loading: false }
    default:
      return state
  }
}

export default formReducer