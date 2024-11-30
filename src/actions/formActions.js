import { API_URL } from '../config'

export const createPet = async (dispatch, pet) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    })
    const data = await response.json()
    dispatch({ type: 'ADD_PET', payload: data })
    dispatch({ type: 'SET_LOADING', payload: false })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}
