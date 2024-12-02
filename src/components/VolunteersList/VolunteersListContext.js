import React, { createContext, useReducer, useContext } from 'react'
import { volunteersListReducer } from './VolunteersListReducer'

const VolunteersListContext = createContext()

const initialState = {
  volunteers: [],
  loading: false,
  error: null,
}

export const VolunteersListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(volunteersListReducer, initialState)

  return (
    <VolunteersListContext.Provider value={{ state, dispatch }}>
      {children}
    </VolunteersListContext.Provider>
  )
}

export const useVolunteersList = () => useContext(VolunteersListContext)