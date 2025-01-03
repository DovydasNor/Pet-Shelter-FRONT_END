import { API_URL } from '../config'

export const getSinglePet = async (dispatch, _id) => {
  dispatch({ type: 'LOADING' })
  try {
    console.log('Fetching pet data for id:', _id)
    const response = await fetch(`${API_URL}/api/pets/${_id}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Fetched pet data:', data)
    dispatch({ type: 'SET_SINGLE_PET', payload: data })
  } catch (error) {
    console.error('Error fetching pet:', error)
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const deletePet = async (dispatch, _id) => {
  dispatch({ type: 'LOADING' })
  try {
    console.log('Deleting pet with id:', _id)
    const response = await fetch(`${API_URL}/api/pets/${_id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    console.log('Deleted pet:', _id)
    dispatch({ type: 'DELETE_SINGLE_PET' })
  } catch (error) {
    console.error('Error deleting pet:', error)
    dispatch({ type: 'ERROR', payload: error.message })
  }
}