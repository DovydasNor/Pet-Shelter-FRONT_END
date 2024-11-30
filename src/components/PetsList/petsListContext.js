import React, { createContext, useReducer, useContext } from 'react'
import petsListReducer from './petsListReducer'

const PetsListContext = createContext()

const initialState = {
  pets: [],
  loading: false,
  error: null,
}

export const PetsListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(petsListReducer, initialState)

  return (
    <PetsListContext.Provider value={{ state, dispatch }}>
      {children}
    </PetsListContext.Provider>
  )
}

export const usePetsList = () => useContext(PetsListContext)