import { API_URL } from "../config"

export const register = async (dispatch, user) => {
    dispatch({ type: "LOADING" })
    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.message || 'Failed to register')
        }
        dispatch({ type: "ADD_USER", payload: data })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message })
        throw error
    }
}

export const login = async (dispatch, credentials) => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Failed to login')
      }
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('isLoggedIn', 'true')
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.user })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message })
    }
}

export const logoutUser = async (dispatch) => {
  dispatch({ type: 'LOADING' })
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/api/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to logout')
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('isLoggedIn')
    dispatch({ type: 'LOGOUT_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message })
  }
}