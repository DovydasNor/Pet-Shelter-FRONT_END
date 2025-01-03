import { createContext, useReducer, useContext } from 'react'
import { volunteersListReducer } from './VolunteersListReducer'
import PropTypes from 'prop-types'

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

VolunteersListProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useVolunteersList = () => useContext(VolunteersListContext)