const singlePetReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SINGLE_PET':
        return { ...state, pet: action.payload, loading: false }
      case 'LOADING':
        return { ...state, loading: true }
      case 'ERROR':
        return { ...state, error: action.payload, loading: false }
      default:
        return state
    }
  }
  
  export default singlePetReducer