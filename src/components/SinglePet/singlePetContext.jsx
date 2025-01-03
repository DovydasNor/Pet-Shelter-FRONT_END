import { createContext, useReducer, useContext } from 'react'
import singlePetReducer from './singlePetReducer'
import PropTypes from 'prop-types'

const SinglePetContext = createContext()

const initialState = {
  pet: null,
  loading: false,
  error: null,
}

export const SinglePetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(singlePetReducer, initialState)

  return (
    <SinglePetContext.Provider value={{ state, dispatch }}>
      {children}
    </SinglePetContext.Provider>
  )
}

SinglePetProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useSinglePet = () => useContext(SinglePetContext)