import { API_URL } from '../config'

export const getSinglePet = async (dispatch, _id) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/pets/${_id}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    dispatch({ type: 'SET_SINGLE_PET', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
    console.error('Error fetching pet:', error)
  }
}