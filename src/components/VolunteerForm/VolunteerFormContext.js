import React, { createContext, useReducer, useContext } from 'react'
import { volunteerFormReducer } from './VolunteerFormReducer'

const VolunteerFormContext = createContext()

const initialState = {
  name: '',
  email: '',
  loading: false,
  error: null,
}

export const VolunteerFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(volunteerFormReducer, initialState)

  return (
    <VolunteerFormContext.Provider value={{ state, dispatch }}>
      {children}
    </VolunteerFormContext.Provider>
  )
}

export const useVolunteerForm = () => useContext(VolunteerFormContext)