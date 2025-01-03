import { createContext, useReducer, useContext } from 'react'
import { singleVolunteerReducer } from './SingleVolunteerReducer'
import PropTypes from 'prop-types'

const SingleVolunteerContext = createContext()

const initialState = {
  volunteer: null,
  loading: false,
  error: null,
}

export const SingleVolunteerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(singleVolunteerReducer, initialState)

  return (
    <SingleVolunteerContext.Provider value={{ state, dispatch }}>
      {children}
    </SingleVolunteerContext.Provider>
  )
}

SingleVolunteerProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useSingleVolunteer = () => useContext(SingleVolunteerContext)