import { API_URL } from "../config"

export const getAllPets = async (dispatch) => {
    dispatch({ type: 'LOADING' })
    try {
        const response = await fetch(`${API_URL}/api/pets`)
        const data = await response.json()
        dispatch({ type: 'SET_PETS', payload: data })
        dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message })
    }
}