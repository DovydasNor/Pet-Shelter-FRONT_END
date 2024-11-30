import React, { createContext, useReducer, useContext } from 'react'
import singlePetReducer from './singlePetReducer'

const SinglePetContext = createContext()

const initialState = {
  pet: null,
  loading: false,
  error: null,
}

export const SinglePetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(singlePetReducer, initialState)

  return (
    <SinglePetContext.Provider value={{ state, dispatch }}>
      {children}
    </SinglePetContext.Provider>
  )
}

export const useSinglePet = () => useContext(SinglePetContext)