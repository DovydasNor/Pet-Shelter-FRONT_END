import { createContext, useReducer, useContext } from 'react'
import formReducer from './formReducer'
import PropTypes from 'prop-types'

const FormContext = createContext()

const initialState = {
  type: '',
  customType: '',
  name: '',
  breed: '',
  petPhoto: '',
  description: '',
  loading: false,
  error: null,
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useForm = () => useContext(FormContext)