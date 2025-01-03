import { API_URL } from '../config'

export const getSingleVolunteer = async (dispatch, id) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/volunteers/${id}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    dispatch({ type: 'SET_SINGLE_VOLUNTEER', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const deleteVolunteer = async (dispatch, id) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/volunteers/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    dispatch({ type: 'DELETE_VOLUNTEER', payload: id })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const updateVolunteer = async (dispatch, volunteer) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/volunteers/${volunteer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(volunteer),
    })
    const data = await response.json()
    dispatch({ type: 'UPDATE_VOLUNTEER', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}