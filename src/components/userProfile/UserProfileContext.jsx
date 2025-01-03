import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import userProfileReducer from './UserProfileReducer'

const UserProfileContext = createContext()

const initialState = {
  user: null,
  loading: false,
  error: null,
}

const UserProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userProfileReducer, initialState)

  return (
    <UserProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </UserProfileContext.Provider>
  )
}

UserProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useUserProfile = () => {
  const context = useContext(UserProfileContext)
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider')
  }
  return context
}

export default UserProfileProvider