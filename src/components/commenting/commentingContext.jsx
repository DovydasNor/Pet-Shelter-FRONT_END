import { createContext, useReducer, useContext } from 'react'
import commentingReducer from './commentingReducer'
import PropTypes from 'prop-types'

const CommentingContext = createContext()

const initialState = {
  comments: [],
  loading: false,
  error: null,
}

export const CommentingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentingReducer, initialState)

  return (
    <CommentingContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentingContext.Provider>
  )
}

CommentingProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useCommenting = () => useContext(CommentingContext)