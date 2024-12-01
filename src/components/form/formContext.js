import React, { createContext, useReducer, useContext } from 'react'
import formReducer from './formReducer'

const FormContext = createContext()

const initialState = {
  type: '',
  name: '',
  breed: '',
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

export const useForm = () => useContext(FormContext)