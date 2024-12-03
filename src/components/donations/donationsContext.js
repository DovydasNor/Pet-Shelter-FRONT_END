import React, { createContext, useReducer, useContext } from 'react'
import donationsReducer from './donationsReducer'

const DonationsContext = createContext()

const initialState = {
  donations: [],
  loading: false,
  error: null,
}

export const DonationsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(donationsReducer, initialState)

  return (
    <DonationsContext.Provider value={{ state, dispatch }}>
      {children}
    </DonationsContext.Provider>
  )
}

export const useDonations = () => useContext(DonationsContext)