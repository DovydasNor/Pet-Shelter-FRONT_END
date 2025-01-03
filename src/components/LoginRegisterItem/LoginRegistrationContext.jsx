import { createContext, useContext, useReducer, useEffect } from "react"
import loginRegisterReducer from "./loginRegisterReducer"
import PropTypes from "prop-types"

const LoginRegistrationContext = createContext()

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  loading: false,
  error: null,
}

const LoginRegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginRegisterReducer, initialState)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('isLoggedIn', state.isLoggedIn)
  }, [state.user, state.isLoggedIn])

  return (
    <LoginRegistrationContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginRegistrationContext.Provider>
  )
}

LoginRegistrationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useLoginRegistration = () => useContext(LoginRegistrationContext)
export { LoginRegistrationProvider }