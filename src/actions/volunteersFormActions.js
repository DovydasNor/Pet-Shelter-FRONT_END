import { API_URL } from '../config'

export const createVolunteer = async (dispatch, volunteer) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/volunteers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(volunteer),
    })
    const data = await response.json()
    dispatch({ type: 'ADD_VOLUNTEER', payload: data })
    dispatch({ type: 'SET_LOADING', payload: false })
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
    dispatch({ type: 'SET_LOADING', payload: false })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

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

export const setField = (dispatch, field, value) => {
  console.log('Setting field:', field, 'to', value)
  dispatch({ type: 'SET_FIELD', field, value })
}

export const resetForm = (dispatch) => {
  console.log('Resetting form')
  dispatch({ type: 'RESET_FORM' })
}