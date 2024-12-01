import { API_URL } from '../config'

export const createPet = async (dispatch, pet) => {
  dispatch({ type: 'LOADING' })
  try {
    const petWithDate = { ...pet, date: new Date().toISOString() }
    const response = await fetch(`${API_URL}/api/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petWithDate),
    })
    const data = await response.json()
    dispatch({ type: 'ADD_PET', payload: data })
    dispatch({ type: 'SET_LOADING', payload: false })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const updatePet = async (dispatch, pet) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/pets/${pet.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    })
    const data = await response.json()
    dispatch({ type: 'UPDATE_PET', payload: data })
    dispatch({ type: 'SET_LOADING', payload: false })
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