const singlePetReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SINGLE_PET':
      console.log('Setting single pet data:', action.payload)
      return { ...state, pet: action.payload, loading: false }
    case 'LOADING':
      console.log('Loading pet data...')
      return { ...state, loading: true }
    case 'ERROR':
      console.error('Error in reducer:', action.payload)
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export default singlePetReducer