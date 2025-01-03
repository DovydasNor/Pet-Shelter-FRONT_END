import { API_URL } from '../config'

export const getAllUsers = async (dispatch) => {
  dispatch({ type: 'LOADING' })
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/api/users`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch users')
    }
    dispatch({ type: 'SET_USERS', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const setAsVolunteer = async (dispatch, Id) => {
  dispatch({ type: 'LOADING' })
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/api/users/${Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to set as volunteer')
    }
    dispatch({ type: 'SET_AS_VOLUNTEER', payload: Id })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const getSingleUser = async (dispatch, userId) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/users/${userId}`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user')
    }
    dispatch({ type: 'SET_USER_PROFILE', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const updateUserProfile = async (dispatch, userId, userData) => {
  dispatch({ type: 'LOADING' })
  try {
    const response = await fetch(`${API_URL}/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update user')
    }
    dispatch({ type: 'SET_USER_PROFILE', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}