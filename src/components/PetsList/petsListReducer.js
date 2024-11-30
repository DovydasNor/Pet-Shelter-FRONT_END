const petsListReducer = (state, action) => {
    switch (action.type) {
      case 'SET_PETS':
        return { ...state, pets: action.payload, loading: false }
      case 'LOADING':
        return { ...state, loading: true }
      case 'ERROR':
        return { ...state, error: action.payload, loading: false }
      default:
        return state
    }
  }
  
  export default petsListReducer