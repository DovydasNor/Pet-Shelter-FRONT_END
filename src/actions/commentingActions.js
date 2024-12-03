import { API_URL } from '../config'

export const getComments = async (dispatch, petId) => {
  dispatch({ type: 'LOADING_COMMENTS' })
  try {
    const response = await fetch(`${API_URL}/api/pets/${petId}/comments`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    dispatch({ type: 'SET_COMMENTS', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR_COMMENTS', payload: error.message })
  }
}

export const createComment = async (dispatch, petId, comment) => {
  dispatch({ type: 'LOADING_COMMENTS' })
  try {
    const response = await fetch(`${API_URL}/api/pets/${petId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
    const data = await response.json()
    dispatch({ type: 'ADD_COMMENT', payload: data })
  } catch (error) {
    dispatch({ type: 'ERROR_COMMENTS', payload: error.message })
  }
}

export const deleteComment = async (dispatch, commentId) => {
  dispatch({ type: 'LOADING_COMMENTS' })
  try {
    const response = await fetch(`${API_URL}/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    dispatch({ type: 'DELETE_COMMENT', payload: commentId })
  } catch (error) {
    dispatch({ type: 'ERROR_COMMENTS', payload: error.message })
  }
}