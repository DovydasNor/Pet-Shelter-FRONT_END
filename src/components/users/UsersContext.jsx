import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import UsersReducer from './UsersReducer'

const UsersContext = createContext()

const initialState = {
  users: [],
  loading: false,
  error: null,
}


export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  )
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useUsers = () => useContext(UsersContext)