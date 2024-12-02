import { API_URL } from '../config'

export const getVolunteers = async (dispatch) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/volunteers`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    dispatch({ type: 'SET_VOLUNTEERS', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}