import { API_URL } from '../config'

export const fetchDonations = async (dispatch) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/donations`)
    const data = await response.json()
    dispatch({ type: 'SET_DONATIONS', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const createDonation = async (dispatch, donation) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donation),
    })
    const data = await response.json()
    dispatch({ type: 'ADD_DONATION', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}