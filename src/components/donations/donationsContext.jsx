import { createContext, useReducer, useContext } from 'react'
import donationsReducer from './donationsReducer'
import PropTypes from 'prop-types'

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

DonationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useDonations = () => useContext(DonationsContext)